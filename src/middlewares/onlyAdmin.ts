import { FastifyReply, FastifyRequest } from 'fastify'

export async function onlyAdmin(request: FastifyRequest, reply: FastifyReply) {
  if (request.user.role !== 'ADMIN') {
    return reply.status(403).send({ message: 'Acesso negado' })
  }
}
