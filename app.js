'use strict'

const { join } = require('path')
const server = 'server'
const plugins = 'plugins'
const AutoLoad = require('fastify-autoload')

module.exports = function (fastify, opts, next) {
  fastify.register(AutoLoad, {
    dir: join(__dirname, plugins),
    options: Object.assign({}, opts)
  });

  fastify
  .register(AutoLoad, {
    dir: join(__dirname, server),
    options: Object.assign({}, opts)
  });

  next();
}
