'use strict'

// Read the .env file.
require('dotenv').config()

// Require the framework
const Fastify = require('fastify')
const port = process.env.FASTIFY_PORT || 3000;
const host = process.env.FASTIFY_ADDRESS || "localhost";
const backlog = process.env.FASTIFY_BACKLOG || 511
const logLevel = process.env.FASTIFY_LOG_LEVEL || 'info'
const pluginTimeout = process.env.FASTIFY_PLUGIN_TIMEOUT || 10000

// Instantiate Fastify with some config
const app = Fastify({
  logger: {
    level: logLevel
  },
  pluginTimeout
})

// Register your application as a normal plugin.
app.register(require('./app.js'))

// Start listening.
app.listen({ port, host, backlog }, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
