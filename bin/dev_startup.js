#!/usr/bin/env node
'use strict';

/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

/**
 * get command line params
 */

const commander = require('commander');
const child_process = require('child_process');


const USERNAME = process.env.USER;
const CONFIG_DEFAULT_FILE = '../config/dev.default.json';
const CONFIG_USER_FILE = `../config/dev.${USERNAME}.json`;

// console.log("dev_startup - [CONFIG_DEFAULT_FILE]=>[" + CONFIG_DEFAULT_FILE + "]; [CONFIG_DEFAULT_FILE]=>[" + CONFIG_DEFAULT_FILE + "]");

commander.version('0.0.1')
	.usage('[options]')
	.description('start ting/done-serve in dev environment')
	.option('-d, --development', 'Enable development-mode (live-reload)')
	.option('-p, --production', 'Enable production-mode (compiled)')
	.parse(process.argv);
const isProduction = (commander.production) ? true : false;

let config = {};

// load default dev config
try {
	config = require(CONFIG_DEFAULT_FILE);

	// console.log({"dev_startup.config_default": config});
} catch (ex) {
	console.log({'dev_startup.config_default.ex': ex});

	// ingored on purpose, we wanna check for both files
}

// load user dev config
try {
	let config_user = require(CONFIG_USER_FILE);

	// merge config from config_user
	for (let key in config_user) {
		config[key] = config_user[key];
	}
} catch (ex) {

	// ingored on purpose, we wanna check for both files
}

let doneServeArgArray = [];	// done-serve command-arguments

// insert into 'process.env' so that 'src/index.stache' has access as 'env'-hash
process.env['HOST_NAME'] = '';	// set 'HOST_NAME' environment-variable to track node-instance
process.env['NODE_ENV'] = 'production';	// set 'NODE_ENV' environment-variable for dev-environment
process.env['CLUSTER_NAME'] = 'dev';	// set 'CLUSTER_NAME' environment-variable for dev-environment
process.env['STATIC_SERVER'] = '';	// set 'STATIC_SERVER' environment-variable for dev-environment
process.env['live_reload_port'] = '';	// set 'live_reload_port' environment-variable for dev-environment

// config guard
if (! config) {
	console.error(`${'Could not find a suitable config file. ' + 'Make sure either '}${CONFIG_USER_FILE} or ${CONFIG_DEFAULT_FILE} are available`);
	process.exit();
}

// check for port
if (config['port']) {
	doneServeArgArray.push('--port', config['port']);
} else {
	console.error('Config error: could not find port setting');
	process.exit();
}

// check for proxy_host
if (config['proxy_host']) {
	doneServeArgArray.push(
		'--proxy', `https://${config['proxy_host']}/json`,
		'--proxy-to', '/json',
		'--proxy-no-cert-check'
	);
}

if (! isProduction) {
	process.env['NODE_ENV'] = 'development';	// set 'NODE_ENV' environment-variable for dev-environment

	doneServeArgArray.push(
		'--develop'
	);

	// check for live_reload_port (development-mode)
	if (config['live_reload_port']) {
		process.env['live_reload_port'] = config['live_reload_port'];

		doneServeArgArray.push(
			'--live-reload-port', config['live_reload_port']
		);
	} else {
		console.error('Config error: could not find live_reload_port setting');
		process.exit();
	}
}

// run done-serve
child_process.spawn(
	'node_modules/.bin/done-serve',
	doneServeArgArray,
	{stdio: 'inherit'}
);
