import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export function errorHandler(
  error: FastifyError | Error,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  // Log do erro completo para debug
  console.error('Erro detalhado:', error)

  // 1. Erros de validação (Zod)
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Erro de validação',
      errors: error.errors.map(e => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    })
  }

  // 2. Erros do Prisma
  if (error instanceof PrismaClientKnownRequestError) {
    return reply.status(400).send({
      message: 'Erro no banco de dados',
      code: error.code,
      meta: error.meta,
    })
  }

  // 3. Erros genéricos (com verificação de tipo segura)
  const safeError = error as Error
  reply.status(500).send({
    message: 'Erro interno no servidor',
    ...(process.env.NODE_ENV === 'development' && {
      error: safeError.message,
      stack: safeError.stack,
    }),
  })
}
