import { fastify } from 'fastify'

const app = fastify()

app.get('/', function (request, reply) {
  reply.send('Hello World!!!')
})

app.listen({ port: 3333 }, function (err, address) {
  if (err) {
    app.log.error(err)
  } else {
    console.log(`Servidor rodando no endereço: ${address}`)
  }
})
