import { FastifyRequest } from 'fastify'

declare module 'fastify' {
  interface FastifyRequest {
    filter?: any
    user: {
      userId: number
      email: string
      role: 'ADMIN' | 'FUNCIONARIO'
    }
  }
}
