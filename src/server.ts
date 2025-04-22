import { fastify } from 'fastify'
import { cashRegisterRoute } from './routes/cashRegisterRoutes'
import { authRoutes } from './routes/cashRegisterAuthRoutes'
import { errorHandler } from './middlewares/errorHandler'
import dotenv from 'dotenv'
import { time } from 'console'

dotenv.config()
const app = fastify({ logger: true })

app.setErrorHandler(errorHandler)
app.register(require('@fastify/helmet'))
app.register(require('@fastify/rate-limit'), {
  max: 100,
  timeWindow: '1 minute',
})
app.register(authRoutes, { prefix: '/cash-register' })
app.register(cashRegisterRoute, { prefix: '/cash-register' })

app.get('/health', async () => {
  return { status: 'online', time: new Date() }
})
app.listen({ port: 3333 }, function (err, address) {
  if (err) {
    app.log.error(err)
  } else {
    console.log(`Servidor rodando no endereço: ${address}`)
  }
})

process.on('SIGINT', () => {
  app.close()
  process.exit(0)
})
