import { FastifyInstance } from 'fastify'
import { gerarResumoCaixa } from '../ia/iaAssistente'

export async function iaRoute(app: FastifyInstance) {
    app.post('/resumo-ia', async (request, reply) => {
        const { dados } = request.body as { dados: string }

        try {
            const respostaIA = await gerarResumoCaixa(dados)
            return reply.send({ resposta: respostaIA })
        } catch (error) {
            return reply.status(500).send({ erro: 'Erro ao gerar resumo com IA' })
        }
     })
}