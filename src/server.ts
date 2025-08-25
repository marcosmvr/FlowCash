import { fastify } from 'fastify'
import { cashRegisterRoute } from './routes/cashRegisterRoutes'
import { authRoutes } from './routes/cashRegisterAuthRoutes'
import { errorHandler } from './middlewares/errorHandler'
import dotenv from 'dotenv'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

dotenv.config()
const app = fastify({ logger: true })

app.setErrorHandler(errorHandler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'API Flow Cash',
      description: 'Documentação da API do FlowCash',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', example: 'clk1a2b3c000008mk5q1q2r3s' },
            name: { type: 'string', example: 'Marcos Reis' },
            email: {
              type: 'string',
              format: 'email',
              example: 'marcos@empresa.com',
            },
            role: {
              type: 'string',
              enum: ['ADMIN', 'FUNCIONARIO'],
              example: 'FUNCIONARIO',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2024-01-01T00:00:00Z',
            },
          },
        },
      },
    },
    tags: [
      { name: 'auth', description: 'Autenticação' },
      { name: 'users', description: 'Gestão de usuários' },
      { name: 'transactions', description: 'Gestão Financeira' },
    ],
  },
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: true,
    tryItOutEnabled: true,
  },
  staticCSP: true,
})

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
