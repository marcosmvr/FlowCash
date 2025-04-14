import jwt from 'jsonwebtoken'
import { FastifyRequest, FastifyReply } from 'fastify'

export const verifyJWT = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  // Verifica se o cabeçalho de autorização está presente
  const authHeader = request.headers['authorization']
  if (!authHeader) {
    console.log('Token não fornecido')
    return reply.status(401).send({ message: 'Token não fornecido' })
  }

  // Extrai o token do cabeçalho Authorization
  const token = authHeader.split(' ')[1]
  console.log('Token recebido:', token)

  try {
    // Tente decodificar o token usando a chave secreta
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || 'seu-segredo-aqui',
    ) as {
      userId: number
      email: string
      role: 'ADMIN' | 'FUNCIONARIO'
    }

    // Armazena as informações do usuário decodificado no request
    request.user = decoded

    return true
  } catch (error) {
    // Se ocorrer erro na verificação do token
    console.log('Erro de token:', error)
    return reply.status(401).send({ message: 'Token inválido' })
  }
}
