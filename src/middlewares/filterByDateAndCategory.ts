import { FastifyReply, FastifyRequest, preHandlerHookHandler } from 'fastify'
import { TransactionQuery } from './transactionQuery'

export const filterByDateAndCategory: preHandlerHookHandler = async (
  request,
  reply,
) => {
  const { startDate, endDate, category } = request.query as TransactionQuery

  const whereConditions: any = {}

  if (startDate) {
    whereConditions.createdAt = { gte: new Date(startDate) }
  }

  if (endDate) {
    whereConditions.createdAt = { ...whereConditions.date, lte: new Date(endDate) }
  }

  if (category) {
    whereConditions.category = category
  }

  ;(request as any).filter = whereConditions
}
