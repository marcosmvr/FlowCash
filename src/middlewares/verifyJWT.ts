import jwt from 'jsonwebtoken'
import { FastifyRequest, FastifyReply } from 'fastify'

export const verifyJWT = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const authHeader = request.headers['authorization']
  if (!authHeader) {
    return reply.status(401).send({ message: 'Token não fornecido' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, 'seu-segredo-aqui') as {
      userId: number
      email: string
      role: 'ADMIN' | 'FUNCIONARIO'
    }
    request.user = decoded

    return true
  } catch (error) {
    return reply.status(401).send({ message: 'Token inválido' })
  }
}
