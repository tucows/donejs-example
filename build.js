#!/usr/bin/env node
"use strict";

const commander = require("commander");
const stealTools = require('steal-tools');

commander.version("0.0.1")
	.usage("[options]")
	.description("transpile ting/done-serve")
	.option("-d, --development", "Enable development-mode (no-minify)")
	.option("-p, --production", "Enable production-mode (minify)")
	.parse(process.argv)
;
const isProduction = (commander.production) ? true : false;
console.log("build - [isProduction]=>[" + isProduction + "]");

const buildPromise = stealTools.build({
	config: __dirname + '/package.json!npm'
}, {
	// if not production, than build without minifying for debugging "live" only issues
	minify: (isProduction),
	bundleAssets: true
}).then(
	// done
	function(buildResult) {
		//console.log({"buildPromise.done.buildResult": buildResult});
	},
	// fail
	function(buildResult) {
		console.log(buildResult);
		// exit 'failure'-code
		process.exit(1);
	}
);

