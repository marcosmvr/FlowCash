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
    {
      preHandler: [verifyJWT],
      schema: {
        tags: ['transactions'],
        security: [{ bearerAuth: [] }],
        summary: 'Cria uma nova transação financeira',
        description: 'Registra entradas (depósitos) ou saídas (gastos)',
        body: {
          type: 'object',
          properties: {
            value: { type: 'number', examples: [1700.76] },
            transactionType: {
              type: 'string',
              enum: ['ENTRADA', 'SAIDA'],
            },
            category: { type: 'string', examples: ['Vendas'] },
          },
        },
        response: {
          201: {
            description: 'Transação criada com sucesso',
            type: 'object',
            properties: {
              id: { type: 'string' },
              message: { type: 'string' },
            },
          },
        },
      },
    },
    async (request, reply) => {
      const createTransactionBody = z.object({
        value: z.number().positive().max(1_000_000),
        transactionType: z.enum(['ENTRADA', 'SAIDA']),
        category: z.string().max(50),
        description: z.string().max(200).optional().default(''),
        createdAt: z.coerce
          .date()
          .optional()
          .default(new Date())
          .refine(date => date <= new Date(), {
            message: 'Data não pode ser futura',
          }),
      })

      const { value, transactionType, category, description, createdAt } =
        createTransactionBody.parse(request.body)
      console.log(request.body)
      const transaction = await prisma.transaction.create({
        data: {
          value,
          transactionType,
          category,
          description,
          createdAt,
          userId: request.user.userId,
        },
      })

      reply.status(201).send({
        id: transaction.id,
        message: 'Transação criada com sucesso!',
      })
    },
  )

  app.get(
    '/transactions',
    { preHandler: [verifyJWT, onlyAdmin, filterByDateAndCategory] },
    async (request, reply) => {
      const transactions = await prisma.transaction.findMany({
        where: request.filter,
        select: {
          id: true,
          value: true,
          transactionType: true,
          category: true,
          createdAt: true,
        },
        orderBy: { createdAt: 'desc' },
      })
      return reply.status(200).send({
        count: transactions.length,
        data: transactions,
      })
    },
  )

  app.get<{ Querystring: TransactionQuery }>(
    '/transactions/summary',
    { preHandler: [verifyJWT, onlyAdmin] },
    async (request, reply) => {
      const querySchema = z.object({
        startDate: z.string().datetime().optional(),
        endDate: z.string().datetime().optional(),
        category: z.string().max(50).optional(),
      })

      const { startDate, endDate, category } = querySchema.parse(request.query)

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

      const summary = await new GeminiService().generateFinancialSummary(
        transactions,
      )

      return reply.status(200).send({
        period: { startDate, endDate },
        summary,
      })
    },
  )
}
