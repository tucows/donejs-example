# donejs-example

Welcome to the donejs-example DoneJS application!

## Getting started

To install all dependencies, (e.g. after cloning it from a Git repository) run

```
npm install donejs -g
npm install
```

## Running tests

Tests can be run with

```
donejs test
```

## Development mode

Development mode can be started with

```
donejs develop
```

This example project includes advanced server configuration via configs.
`/bin/dev_startup.js` is called with donejs develop. This file takes one parameter `--no-live-reload`
this uses a standard HTTP server.
You need to have `commander` in your `package.json` `dev-dependancies` if you are building a new application from sratch. Then replace your `develop` line to use `./bin/dev_startup.js`

## Build and production mode

To build the application into a production bundle run

```
donejs build
```

In Unix environment the production application can be started like this:

```
NODE_ENV=production npm start
```

## Configure

The application configuration is done via package.json
The majority of this is within the `system` key.

Most of what is in there is documented at CanJS and StealJS. Here are some exceptions:

```
  "envs": {
      "server-production": {
        "renderingBaseUrl": "https://tucows.com/"
      }
    }
```


