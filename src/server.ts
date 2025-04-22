import { fastify } from 'fastify'
import { cashRegisterRoute } from './routes/cashRegisterRoutes'
import { authRoutes } from './routes/cashRegisterAuthRoutes'
import dotenv from 'dotenv'
import { iaRoute } from './routes/iaRoute'

dotenv.config()
const app = fastify()

app.register(authRoutes, { prefix: '/cash-register' })
app.register(cashRegisterRoute, { prefix: '/cash-register' })
app.register(iaRoute, { prefix: '/ia' })


app.listen({ port: 3333 }, function (err, address) {
  if (err) {
    app.log.error(err)
  } else {
    console.log(`Servidor rodando no endereço: ${address}`)
  }
})
