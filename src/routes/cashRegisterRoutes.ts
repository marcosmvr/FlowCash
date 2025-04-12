import { Prisma } from '@prisma/client'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function cashRegisterRoute(app: FastifyInstance) {
  app.post('/transaction', async (request, reply) => {
    const createTransactionBody = z.object({
      value: z.number(),
      transactionType: z.enum(['ENTRADA', 'SAIDA']),
      category: z.string(),
      description: z.string(),
      createdAt: z.number(),
    })

    try {
      const { value, transactionType, category, description, createdAt } =
        createTransactionBody.parse(request.body)

      reply.status(200).send({ message: 'Transação criada com sucesso!' })
    } catch (error) {
      if (error instanceof z.ZodError) {
        reply.status(400).send({
          message: 'Erro de validação!',
          issues: error.errors,
        })
      } else {
        reply.status(500).send('Erro inesperado')
      }
    }

    
  })
}
