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
    {
      preHandler: [verifyJWT, onlyAdmin, filterByDateAndCategory],
      schema: {
        tags: ['transactions'],
        summary: 'Lista todas as transações',
        description: 'Retorna transações filtradas por período (apenas admin)',
        security: [{ bearerAuth: [] }],
        querystring: {
          type: 'object',
          properties: {
            startDate: {
              type: 'string',
              format: 'date',
              description: 'Data inicial (YYYY-MM-DD)',
              examples: ['2024-01-01'],
            },
            endDate: {
              type: 'string',
              format: 'date',
              description: 'Data final (YYYY-MM-DD)',
              examples: ['2024-12-31'],
            },
            category: {
              type: 'string',
              examples: ['Vendas', 'Produtos'],
            },
          },
        },
        response: {
          200: {
            description: 'Lista de transações',
            type: 'object',
            properties: {
              count: { type: 'number', example: 5 },
              data: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      example: 'clk1a2b3c000008mk5q1q2r3s',
                    },
                    value: { type: 'number', example: 150.75 },
                    transactionType: { type: 'string', example: 'SAIDA' },
                    category: { type: 'string', example: 'Vendas' },
                    createdAt: {
                      type: 'string',
                      format: 'date-time',
                      example: '2024-01-01T00:00:00Z',
                    },
                  },
                },
              },
            },
          },
          400: { description: 'Parâmetros inválidos' },
          401: { description: 'Token inválido ou ausente' },
          403: { description: 'Acesso negado (requer perfil admin)' },
          500: { description: 'Erro interno no servidor' },
        },
      },
    },
    async (request, reply) => {
      try {
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
          data: transactions.map(t => ({
            ...t,
            createdAt: t.createdAt.toISOString(), // Garante formato ISO
          })),
        })
      } catch (error) {
        request.log.error('Erro ao buscar transações:', error)
        throw error // Será capturado pelo errorHandler
      }
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
