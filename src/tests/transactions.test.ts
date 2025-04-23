import { fastify } from 'fastify'
import supertest from 'supertest'
import { cashRegisterRoute } from '../routes/cashRegisterRoutes'
import { authRoutes } from '../routes/cashRegisterAuthRoutes'
import { PrismaClient } from '../prisma/generated/prisma'
import dotenv from 'dotenv'

dotenv.config()

describe('Rotas do Caixa', () => {
  const app = fastify()
  const prisma = new PrismaClient()

  let tokenFuncionario = ''
  let tokenAdmin = ''

  beforeAll(async () => {
    app.register(authRoutes, { prefix: '/cash-register' })
    app.register(cashRegisterRoute, { prefix: '/cash-register' })

    await app.ready()
    await prisma.transaction.deleteMany()
    await prisma.user.deleteMany()

    // Cria FUNCIONÁRIO
    const emailFuncionario = `func${Date.now()}@gmail.com`
    await supertest(app.server).post('/cash-register/register').send({
      name: 'Funcionario',
      email: emailFuncionario,
      password: '12345678',
      role: 'FUNCIONARIO',
    })

    // Faz login do FUNCIONÁRIO
    const loginFunc = await supertest(app.server)
      .post('/cash-register/login')
      .send({
        email: emailFuncionario,
        password: '12345678',
      })
    tokenFuncionario = loginFunc.body.token

    // Cria ADMIN
    const emailAdmin = `admin${Date.now()}@gmail.com`
    await supertest(app.server).post('/cash-register/register').send({
      name: 'Admin',
      email: emailAdmin,
      password: '12345678',
      role: 'ADMIN',
    })

    // Faz login do ADMIN
    const loginAdm = await supertest(app.server)
      .post('/cash-register/login')
      .send({
        email: emailAdmin,
        password: '12345678',
      })
    tokenAdmin = loginAdm.body.token
  })

  afterAll(async () => {
    await prisma.$disconnect()
    await app.close()
  })

  describe('POST /transaction', () => {
    it('FUNCIONÁRIO deve conseguir criar uma transação', async () => {
      const response = await supertest(app.server)
        .post('/cash-register/transaction')
        .send({
          value: 100,
          transactionType: 'ENTRADA',
          category: 'Vendas',
          description: 'Venda de produto',
        })
        .set('Authorization', `Bearer ${tokenFuncionario}`)

      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty(
        'message',
        'Transação criada com sucesso!',
      )
    })
  })

  describe('GET /transactions', () => {
    it('ADMIN deve listar as transações com sucesso', async () => {
      const response = await supertest(app.server)
        .get('/cash-register/transactions')
        .set('Authorization', `Bearer ${tokenAdmin}`)

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('count')
      expect(response.body).toHaveProperty('data')
      expect(Array.isArray(response.body.data)).toBe(true)
    })

    it('FUNCIONÁRIO não pode listar transações', async () => {
      const response = await supertest(app.server)
        .get('/cash-register/transactions')
        .set('Authorization', `Bearer ${tokenFuncionario}`)

      expect(response.status).toBe(403)
    })
  })
})
