import dotenv from 'dotenv'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function gerarResumoCaixa(dadosResumo: string) {
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

  const resposta = completion.choices[0].message.content
  console.log('\n[ASSISTENTE]:\n', resposta)
}
