import { fastify } from 'fastify'

const app = fastify()

app.listen({ port: 3333 }, function (err, address) {
  if (err) {
    app.log.error(err)
  } else {
    console.log(`Servidor rodando no endereço: ${address}`)
  }
})
