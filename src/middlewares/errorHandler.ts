import { PrismaClient } from '@prisma/client'
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

export function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply,
) {
    // Erros de validação Zod
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Erro de validação',
      errors: error.errors.map(e => ({
        field: e.path.join('.'),
        message: e.message
      }))
    })
  }
    // Erros do Prisma
  if  (error instanceof PrismaClient.PrismaClientKnownRequestError) {
    return reply.status(400).send({
        message: 'Erro no banco de dados',
        code: error.code
    })
  }

  console.error('Erro não tratado:', error)
  reply.status(500).send({ message: 'Erro interno' })
}
