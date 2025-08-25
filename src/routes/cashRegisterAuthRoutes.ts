import { PrismaClient } from '@prisma/client'
import { FastifyInstance } from 'fastify'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { verifyJWT } from '../middlewares/verifyJWT'
import { onlyAdmin } from '../middlewares/onlyAdmin'
import { filterByDateAndCategory } from '../middlewares/filterByDateAndCategory'

const prisma = new PrismaClient()

export async function authRoutes(app: FastifyInstance) {
  app.post(
    '/register',
    {
      schema: {
        tags: ['auth'],
        summary: 'Registra um novo usuário',
        description: 'Cria uma conta de usuário com os dados fornecidos',
        body: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            name: {
              type: 'string',
              minLength: 3,
              examples: ['Marcos Reis'],
            },
            email: {
              type: 'string',
              format: 'email',
              examples: ['marcos@empresa.com'],
            },
            password: {
              type: 'string',
              minLength: 6,
              examples: ['senhaSegura123'],
            },
            role: {
              type: 'string',
              enum: ['ADMIN', 'FUNCIONARIO'],
              default: 'FUNCIONARIO',
              examples: ['FUNCIONARIO'],
            },
          },
        },
        response: {
          201: {
            description: 'Usuário criado com sucesso',
            type: 'object',
            properties: {
              message: {
                type: 'string',
                examples: ['Usuário criado com sucesso!'],
              },
            },
          },
          400: { description: 'Dados inválidos' },
          500: { description: 'Erro no servidor' },
        },
      },
    },
    async (request, reply) => {
      const registerBody = z.object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(6),
        role: z
          .enum(['ADMIN', 'FUNCIONARIO'])
          .optional()
          .default('FUNCIONARIO'),
      })

      try {
        const { name, email, password, role } = registerBody.parse(request.body)

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            role,
            createdAt: new Date(),
          },
        })

        reply.status(201).send({ message: 'Usuário criado com sucesso!' })
      } catch (error) {
        console.error('Erro: ', error)
        reply.status(500).send({ message: 'Erro ao criar usuário' })
      }
    },
  )

  app.post(
    '/login',
    {
      schema: {
        tags: ['auth'],
        summary: 'Autenticação de usuário',
        description: 'Realiza login e retorna um token JWT',
        body: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
              examples: ['marcos@empresa.com'],
            },
            password: {
              type: 'string',
              examples: ['senhaSegura123'],
            },
          },
        },
        response: {
          200: {
            description: 'Login bem-sucedido',
            type: 'object',
            properties: {
              token: {
                type: 'string',
                examples: ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'],
              },
            },
          },
          400: { description: 'Credenciais inválidas' },
          500: { description: 'Erro no servidor' },
        },
      },
    },
    async (request, reply) => {
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

        const secretKey = process.env.JWT_SECRET

        const token = jwt.sign(
          { userId: user.id, email: user.email, role: user.role },
          process.env.JWT_SECRET_KEY as string,
          {
            expiresIn: '1h',
          },
        )

        reply.status(200).send({ token })
      } catch (error) {
        console.error('Erro: ', error)
        reply.status(500).send({ message: 'Erro ao realizar login' })
      }
    },
  )

  app.get(
    '/users',
    {
      preHandler: [verifyJWT, onlyAdmin],
      schema: {
        tags: ['users'],
        summary: 'Lista todos os usuários',
        description: 'Retorna todos os usuários cadastrados (apenas admin)',
        security: [{ bearerAuth: [] }],
        response: {
          200: {
            description: 'Lista de usuários',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                email: { type: 'string', format: 'email' },
                role: { type: 'string', enum: ['ADMIN', 'FUNCIONARIO'] },
                createdAt: { type: 'string', format: 'date-time' },
              },
            },
            examples: [
              [
                {
                  id: 'clk1a2b3c000008mk5q1q2r3s',
                  name: 'Admin',
                  email: 'admin@empresa.com',
                  role: 'ADMIN',
                  createdAt: '2024-01-01T00:00:00Z',
                },
              ],
            ],
          },
          401: { description: 'Token inválido ou ausente' },
          403: { description: 'Acesso negado (requer perfil admin)' },
          500: { description: 'Erro interno no servidor' },
        },
      },
    },
    async (request, reply) => {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      })
      return reply.send(users)
    },
  )
}
