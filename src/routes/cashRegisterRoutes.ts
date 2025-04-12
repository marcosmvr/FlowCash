import { FastifyInstance } from 'fastify'
import zod from 'zod'

export async function cashRegisterRoute(app: FastifyInstance) {
  app.post('/transaction', async (request, reply) => {
    
  })
}
