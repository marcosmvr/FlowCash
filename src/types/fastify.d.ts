import { FastifyRequest } from 'fastify'
import { TransactionQuery } from '../middlewares/transactionQuery'

declare module 'fastify' {
  interface FastifyRequest {
    filter?: TransactionQuery
    user: {
      userId: number
      email: string
      role: 'ADMIN' | 'FUNCIONARIO'
    }
  }
}
