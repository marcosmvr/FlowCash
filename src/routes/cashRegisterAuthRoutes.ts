import { PrismaClient } from '../prisma/generated/prisma'
import { FastifyInstance } from 'fastify'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

const prisma = new PrismaClient()

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request, reply) => {
    const registerBody = z.object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
    })

    try {
      const { name, email, password } = registerBody.parse(request.body)

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          createdAt: new Date(),
        },
      })

      reply.status(201).send({ message: 'Usuário criado com sucesso!' })
    } catch (error) {
      console.error('Erro: ', error)
      reply.status(500).send({ message: 'Erro ao criar usuário' })
    }
  })

  app.post('/login', async (request, reply) => {
    const loginBody = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    })

    try {
      const { email, password } = loginBody.parse(request.body)

      const user = await prisma.user.findUnique({ where: { email } })
      if (!user) {
        return reply.status(400).send({ message: 'Email ou senha inválidos' })
      }

      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return reply.status(400).send({ message: 'Email ou senha inválidos' })
      }

      const token = jwt.sign({ userId: user.id }, 'seu-segredo-aqui', {
        expiresIn: '1h',
      })

      reply.status(200).send({ token })
    } catch (error) {
      console.error('Erro: ', error)
      reply.status(500).send({ message: 'Erro ao realizar login' })
    }
  })
}
