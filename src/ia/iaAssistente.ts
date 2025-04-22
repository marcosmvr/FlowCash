import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function gerarResumoCaixa(dadosResumo: string) {
  try {
    // Fazendo a requisição para a OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'Você é um assistente financeiro formal que resume o dia com dicas rápidas.',
        },
        {
          role: 'user',
          content: `Resumo do dia: ${dadosResumo}`,
        },
      ],
    })

    // Acessando a resposta da IA
    const resposta = completion.choices[0].message.content

    // Logando a resposta para debugging
    console.log('\n[ASSISTENTE]:\n', resposta)

    // Retornando a resposta da IA
    return resposta
  } catch (error) {
    // Logando o erro em caso de falha
    console.error('Erro ao gerar resumo com IA:', error)
    throw new Error('Erro ao gerar resumo com IA') // Lançando o erro para que a rota possa tratá-lo
  }
}
