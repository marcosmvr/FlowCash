import { PrismaClient } from '../prisma/generated/prisma/'
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { verifyJWT } from '../middlewares/verifyJWT'
import { onlyAdmin } from '../middlewares/onlyAdmin'
import { filterByDateAndCategory } from '../middlewares/filterByDateAndCategory'
import { TransactionQuery } from '../middlewares/transactionQuery'
import { GeminiService } from '../services/geminiService'

const prisma = new PrismaClient()

export async function cashRegisterRoute(app: FastifyInstance) {
  app.post(
    '/transaction',
    { preHandler: [verifyJWT] },
    async (request, reply) => {
      const userId = request.user.userId
      const createTransactionBody = z.object({
        value: z.number().positive().max(1_000_000),
        transactionType: z.enum(['ENTRADA', 'SAIDA']),
        category: z.string().max(50),
        description: z.string().max(200).optional().default(''),
        createdAt: z.coerce.date().refine(date => date <= new Date(), {
          message: 'Data não pode ser futura',
        }),
      })

      try {
        const { value, transactionType, category, description, createdAt } =
          createTransactionBody.parse(request.body)
        console.log(request.body)
        const userId = request.user.userId

        const transaction = await prisma.transaction.create({
          data: {
            value,
            transactionType,
            category,
            description: description || '',
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
    },
  )

  app.get(
    '/transactions',
    { preHandler: [verifyJWT, onlyAdmin, filterByDateAndCategory] },
    async (request, reply) => {
      try {
        console.log(request.filter)
        const transactions = await prisma.transaction.findMany({
          where: request.filter,
        })
        return reply.status(200).send(transactions)
      } catch (error) {
        console.error('Erro: ', error)
        reply.status(500).send({ error: 'Erro ao listar transações' })
      }
    },
  )

  app.get<{ Querystring: TransactionQuery }>(
    '/transactions/summary',
    { preHandler: [verifyJWT, onlyAdmin] },
    async (request, reply) => {
      try {
        const { startDate, endDate, category } = request.query

        const transactions = await prisma.transaction.findMany({
          where: {
            createdAt: {
              gte: startDate ? new Date(startDate) : undefined,
              lte: endDate ? new Date(endDate) : undefined,
            },
            category: category ? category : undefined,
          },
          orderBy: { createdAt: 'asc' },
        })

        const geminiService = new GeminiService()
        const summary = await geminiService.generateFinancialSummary(
          transactions,
        )

        reply.status(200).send({ summary })
      } catch (error) {
        console.error('Erro:', error)
        reply.status(500).send({ error: 'Erro ao gerar resumo' })
      }
    },
  )
}
