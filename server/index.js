
const fastifyStatic = require('fastify-static');
const { join } = require('path');
const html = '../dist';
// const logLevel = 'info';

// const fastify = require('fastify')({
//   logger: {
//     level: logLevel
//   }
// });

module.exports = function (fastify, opts, next) {
  fastify.register(fastifyStatic, {
    root: join(__dirname, html),
    prefix: '/',
  })

  next()
}



// const fastify = require('fastify')()
// // const path = require('path')
//
// fastify.register(require('fastify-static'), {
//   root: join(__dirname, 'public'),
//   prefix: '/public/', // optional: default '/'
// })
//
// fastify.get('/another/path', function (req, reply) {
//   reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
// })
