#!/usr/bin/env node
"use strict";
var program = require('commander');

/**
 * get command line params
 */

program.usage('[options]')
	.option('-n, --no-live-reload', 'Disable the use of live reload and just use a normal HTTP server')
	.parse(process.argv);

/**
 * Gather local config, then spawn donejs development server
 */

const user = process.env.USER;

const userConfig = '../config/dev.' + user + '.json';
const defaultConfig = '../config/dev.default.json';

var config;

// load default dev config
try {
	config = require(defaultConfig);
} catch(e) {
	// ingored on purpose, we wanna check for both files
}

// load local dev config
try {
	config = require(userConfig);
} catch(e) {
	// ingored on purpose, we wanna check for both files
}

// config guard
if (!config) {
	console.error('Could not find a suitable config file.  ' +
		'Make sure either ' + userConfig + ' or ' + defaultConfig + ' are available'
	);
	process.exit();
}

// check for port
if (!config['port']) {
	console.error('Config error: could not find port setting');
	process.exit();
}

// check for live reload port
if (!config['live_reload_port'] && program.liveReload) {
	console.error('Config error: could not find live_reload_port setting');
	process.exit();
}

// run can server
const child_process = require("child_process");


console.log(program);
if (program.liveReload) {
	// set the live reload port for use in the UI
	process.env.live_reload_port = config['live_reload_port'];
	
	// set the config array
	let serverOptions = [
		"--develop", // done-ssr development mode

		"--port", config['port'],

		"--live-reload-port", config['live_reload_port']
	];

	if (config['proxy_host']) {
		serverOptions.concat([
			"--proxy", 'https://' + config['proxy_host'] + '/json',
			"--proxy-to", "/json",
			"--proxy-no-cert-check" //do not fail if cert is invalid
		]);
	}

	// spawn done-serve with configs as params
	child_process.spawn(
		"node_modules/.bin/done-serve", serverOptions,
		{stdio: 'inherit'}
	);
} else {
	process.env.live_reload_port = 0;
	let connect = require('connect');
	let serveStatic = require('serve-static');
	connect().use(serveStatic('./')).listen(config['port'], function() {
		console.log("Server listening on port: %s", config['port']);						 
	});
}
