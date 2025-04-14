import { PrismaClient } from '../prisma/generated/prisma/'
import { FastifyInstance, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { verifyJWT } from '../middlewares/verifyJWT'
import { onlyAdmin } from '../middlewares/onlyAdmin'
import { filterByDateAndCategory } from '../middlewares/filterByDateAndCategory'
import { TransactionQuery } from '../middlewares/transactionQuery'

const prisma = new PrismaClient()

export async function cashRegisterRoute(app: FastifyInstance) {
  app.post('/transaction', async (request, reply) => {
    const createTransactionBody = z.object({
      value: z.number(),
      transactionType: z.enum(['ENTRADA', 'SAIDA']),
      category: z.string(),
      description: z.string(),
      createdAt: z.string().transform(str => {
        const date = new Date(str)
        if (isNaN(date.getTime())) {
          throw new Error('Data inválida')
        }
        return date
      }),
    })

    try {
      const { value, transactionType, category, description, createdAt } =
        createTransactionBody.parse(request.body)
      console.log(request.body)
      const userId = 1

      const transaction = await prisma.transaction.create({
        data: {
          value,
          transactionType,
          category,
          description,
          createdAt,
          userId,
        },
      })

      reply.status(200).send({ message: 'Transação criada com sucesso!' })
    } catch (error) {
      console.error('Erro: ', error)

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

  app.get(
    '/transactions',
    { preHandler: [verifyJWT, onlyAdmin, filterByDateAndCategory] },
    async (
      request: FastifyRequest<{ Querystring: TransactionQuery }>, // Tipagem explícita
      reply,
    ) => {
      try {
        const transactions = await prisma.transaction.findMany({
          where: request.filter, // Aqui o filtro é passado corretamente
        })
        return reply.status(200).send(transactions)
      } catch (error) {
        console.error('Erro: ', error)
        reply.status(500).send({ error: 'Erro ao listar transações' })
      }
    },
  )
}
