import { GoogleGenerativeAI } from '@google/generative-ai'

export class GeminiService {
  private genAI: GoogleGenerativeAI

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!)
  }

  async generateFinancialSummary(transactions: any[]): Promise<string> {
    const model = this.genAI.getGenerativeModel({
      model: 'gemini-1.5-pro-latest',
    })

    const prompt = `Analise estas transações financeiras e responda em português:
    1. Saldo total (entradas - saídas)
    2. Dia com maior movimentação
    3. Categoria mais frequente
    4. Um resumo conciso (3 linhas)
    
    Dados (formato JSON): ${JSON.stringify(transactions, null, 2)}`

    try {
      const result = await model.generateContent(prompt)
      return result.response.text()
    } catch (error) {
      console.error('Erro no gemini:', error)
      return 'Não foi possivel gerar o resumo'
    }
  }
}
