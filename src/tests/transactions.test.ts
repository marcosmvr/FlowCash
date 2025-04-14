import { fastify } from 'fastify'
import supertest from 'supertest'
import { cashRegisterRoute } from '../routes/cashRegisterRoutes'
import { authRoutes } from '../routes/cashRegisterAuthRoutes'
import { PrismaClient } from '../prisma/generated/prisma'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

describe('Rotas do Caixa', () => {
  const app = fastify()
  const prisma = new PrismaClient()
  const secret = process.env.JWT_SECRET_KEY // Agora usa a variável de ambiente

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
      password: '123456',
      role: 'FUNCIONARIO',
    })

    // Faz login do FUNCIONÁRIO
    const loginFunc = await supertest(app.server)
      .post('/cash-register/login')
      .send({
        email: emailFuncionario,
        password: '123456',
      })

    // Verifica o token e loga
    console.log('Token do FUNCIONÁRIO: ', loginFunc.body.token)
    tokenFuncionario = loginFunc.body.token

    // Cria ADMIN
    const emailAdmin = `admin${Date.now()}@gmail.com`
    await supertest(app.server).post('/cash-register/register').send({
      name: 'Admin',
      email: emailAdmin,
      password: 'admin123',
      role: 'ADMIN',
    })

    // Faz login do ADMIN
    const loginAdm = await supertest(app.server)
      .post('/cash-register/login')
      .send({
        email: emailAdmin,
        password: 'admin123',
      })

    // Verifica o token e loga
    console.log('Token do ADMIN: ', loginAdm.body.token)
    tokenAdmin = loginAdm.body.token
  })

  afterAll(async () => {
    await app.close()
  })

  it('FUNCIONÁRIO deve conseguir criar uma transação', async () => {
    const response = await supertest(app.server)
      .post('/cash-register/transaction')
      .send({
        value: 100,
        transactionType: 'ENTRADA',
        category: 'Vendas',
        description: 'Venda de produto',
        createdAt: new Date().toISOString(),
      })
      .set('Authorization', `Bearer ${tokenFuncionario}`) // Passando o token no cabeçalho

    console.log(
      'Resposta do FUNCIONÁRIO para criação de transação: ',
      response.body,
    )

    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Transação criada com sucesso!')
  })

  it('ADMIN deve listar as transações com sucesso', async () => {
    const response = await supertest(app.server)
      .get('/cash-register/transactions')
      .set('Authorization', `Bearer ${tokenAdmin}`) // Passando o token no cabeçalho

    console.log(
      'Resposta do ADMIN para listagem de transações: ',
      response.body,
    )

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  it('FUNCIONÁRIO não pode listar transações (sem permissão)', async () => {
    const response = await supertest(app.server)
      .get('/cash-register/transactions')
      .set('Authorization', `Bearer ${tokenFuncionario}`) // Passando o token do FUNCIONÁRIO

    console.log(
      'Resposta do FUNCIONÁRIO para listar transações (esperado erro 403): ',
      response.body,
    )

    expect(response.status).toBe(403) // Espera erro 403 por falta de permissão
  })
})
