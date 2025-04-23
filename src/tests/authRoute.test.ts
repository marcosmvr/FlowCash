import { fastify } from 'fastify'
import { authRoutes } from '../routes/cashRegisterAuthRoutes'
import supertest from 'supertest'
import { PrismaClient } from '../prisma/generated/prisma'

describe('Auth Routes', () => {
  const app = fastify()
  const prisma = new PrismaClient()

  beforeAll(async () => {
    app.register(authRoutes, { prefix: '/cash-register' })
    await app.ready()
    await prisma.user.deleteMany()
  })

  afterAll(async () => {
    await prisma.$disconnect()
    await app.close()
  })

  describe('POST /register', () => {
    it('Deve registrar um novo usuário com sucesso', async () => {
      const response = await supertest(app.server)
        .post('/cash-register/register')
        .send({
          name: 'Marcos Teste',
          email: `marcosteste${Date.now()}@gmail.com`,
          password: '12345678',
          role: 'FUNCIONARIO',
        })

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty(
        'message',
        'Usuário criado com sucesso!',
      )
    })

    it('Deve retornar erro 400 para dados inválidos', async () => {
      const response = await supertest(app.server)
        .post('/cash-register/register')
        .send({
          name: 'Ma', // Nome muito curto
          email: 'email-invalido',
          password: '123', // Senha muito curta
        })

      expect(response.status).toBe(400)
    })
  })

  describe('POST /login', () => {
    const testEmail = `teste${Date.now()}@gmail.com`
    const testPassword = '12345678'

    beforeAll(async () => {
      await supertest(app.server).post('/cash-register/register').send({
        name: 'Login teste',
        email: testEmail,
        password: testPassword,
        role: 'FUNCIONARIO',
      })
    })

    it('Deve fazer login com sucesso', async () => {
      const response = await supertest(app.server)
        .post('/cash-register/login')
        .send({
          email: testEmail,
          password: testPassword,
        })

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('token')
    })

    it('Deve retornar erro 400 para credenciais inválidas', async () => {
      const response = await supertest(app.server)
        .post('/cash-register/login')
        .send({
          email: 'naoexiste@email.com',
          password: 'senhainvalida',
        })

      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty(
        'message',
        'Email ou senha inválidos',
      )
    })
  })
})
