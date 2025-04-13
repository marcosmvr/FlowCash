import { FastifyReply, FastifyRequest } from 'fastify'

interface TransactionQuery {
  startDate?: string
  endDate?: string
  category?: string
}

export const filterByDateAndCategory = async (
  request: FastifyRequest<{ Querystring: TransactionQuery }>,
  reply: FastifyReply,
) => {
  const { startDate, endDate, category } = request.query

  const whereConditions: any = {}

  if (startDate) {
    whereConditions.date = { gte: new Date(startDate) }
  }

  if (endDate) {
    whereConditions.date = { ...whereConditions.date, lte: new Date(endDate) }
  }

  if (category) {
    whereConditions.category = category
  }

  request.filter = whereConditions
}
