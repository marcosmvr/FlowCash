# 📊 Controle de Caixa API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Fastify](https://img.shields.io/badge/Fastify-4.x-lightgrey)
![Prisma](https://img.shields.io/badge/Prisma-5.x-orange)
![Jest](https://img.shields.io/badge/Jest-29.x-red)
![Swagger](https://img.shields.io/badge/Swagger-UI-green) 

**API profissional para gestão financeira** com autenticação segura, registro de transações e análise inteligente via IA.  

**Para quem é feito:**  
- Donos de pequenos negócios  
- Sistemas de gestão financeira  
- Devs que precisam de um backend financeiro completo  

**Diferenciais:**  
✅ Autenticação JWT com níveis de acesso  
✅ Swagger integrado para documentação automática  
✅ Testes automatizados (Jest)  
✅ Resumo financeiro com IA (Gemini)  

**Objetivo principal:**  
Oferecer uma solução backend pronta para integrar com apps web/mobile, demonstrando boas práticas de desenvolvimento.  

## ✨ Funcionalidades Principais

- **Sistema de Autenticação**
  - Registro de usuários com roles (ADMIN/FUNCIONÁRIO)
  - Login com JWT e proteção de rotas
  - Middlewares de verificação e controle de acesso

- **Gestão Financeira**
  - Criação de transações (ENTRADA/SAÍDA)
  - Filtros avançados por data e categoria
  - Resumo financeiro gerado por IA (Gemini API)
  - Validação rigorosa de dados com Zod

- **Qualidade do Código**
  - Documentação Swagger integrada
  - Testes automatizados com Jest (100% coverage)
  - Sistema de cache para melhor performance
  - Tipagem estática com TypeScript

## 🛠 Stack Tecnológica

### 📦 Backend
- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset tipado para maior confiabilidade
- **Fastify** - Framework web rápido e eficiente

### 🗃 Banco de Dados
- **Prisma** - ORM moderno para PostgreSQL
- **PostgreSQL** - Banco de dados relacional

### 🔐 Segurança
- **JWT** - Autenticação stateless
- **Bcrypt** - Hash para senhas
- **Zod** - Validação de dados

### 📚 Documentação
- **Swagger UI** - Documentação interativa
- **Swagger Autogen** - Geração automática

### 🧪 Testes
- **Jest** - Framework de testes
- **Supertest** - Testes de integração HTTP

### 🚀 DevOps
- **ESLint** - Linter para padrões de código
- **Prettier** - Formatação consistente
- **Dotenv** - Gerenciamento de variáveis

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- PostgreSQL 12+
- Yarn ou npm
- Conta no Google Cloud para Gemini API (opcional)

## 🚀 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/marcosmvr/controle-de-caixa.git
cd controle-de-caixa

# Instale as dependências
npm install

# Configure o ambiente (edite com suas credenciais)
cp .env.example .env

# Execute as migrações do banco de dados
npx prisma migrate dev

# Inicie o servidor em desenvolvimento
npm run dev

# Ou para produção
npm run build && npm start
```

## 📚 Documentação da API

Acesse a documentação interativa após iniciar o servidor:
`http://localhost:3000/documentation`

## 🧪 Executando Testes

```bash
# Executar todos os testes
npm test

# Testes com relatório de cobertura
npm run test:coverage

# Executar testes em watch mode
npm run test:watch
```

## 🌐 Variáveis de Ambiente

Crie um arquivo `.env`:

```ini
# Banco de dados
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"

# Autenticação
JWT_SECRET_KEY="sua-chave-secreta-forte-aqui-32-caracteres"

# Servidor
PORT=3000

# Gemini API (opcional)
GEMINI_API_KEY="sua-chave-da-api"
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## ✉️ Contato

**Marcos Reis**  
Desenvolvedor Backend

- 📧 Email: [marcosemprego260@gmail.com](mailto:marcosemprego260@gmail.com)
- 💼 GitHub: [github.com/marcosmvr](https://github.com/marcosmvr)

---

> Projeto desenvolvido como portfólio profissional, demonstrando habilidades em desenvolvimento backend com TypeScript, arquitetura de APIs REST e boas práticas de programação.
