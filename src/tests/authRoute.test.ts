import { fastify } from 'fastify'
import { authRoutes } from '../routes/cashRegisterAuthRoutes'
import supertest from 'supertest'

describe('Auth Routes', () => {
  const app = fastify()

  beforeAll(async () => {
    app.register(authRoutes, { prefix: '/cash-register' })
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

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
    expect(response.body.message).toBe('Usuário criado com sucesso!')
  })

  it('Deve fazer login com sucesso', async () => {
    const email = `teste${Date.now()}@gmail.com`
    const password = '123456'

    await supertest(app.server).post('/cash-register/register').send({
      name: 'Login teste',
      email,
      password,
      role: 'FUNCIONARIO',
    })

    const response = await supertest(app.server)
      .post('/cash-register/login')
      .send({
        email,
        password,
      })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')
  })
})
