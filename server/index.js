
const fastifyStatic = require('fastify-static');
const { join } = require('path');
const html = '../dist';

module.exports = function (fastify, opts, next) {
  fastify.register(fastifyStatic, {
    root: join(__dirname, html),
    prefix: '/',
  })

  next()
}
