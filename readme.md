Perfeito! Aqui está o **README.md profissional e personalizado** com o seu nome de usuário e o nome do repositório ajustados:

---

# Controle Financeiro Diário

Sistema web simples e funcional para **registro de movimentações financeiras diárias**, ideal para pequenos negócios e autônomos que desejam sair do papel e controlar seu caixa com facilidade.

---

## Visão Geral

### Objetivo
Criar um sistema onde o usuário possa registrar **entradas** e **saídas de dinheiro**, mantendo o controle do saldo e podendo visualizar o histórico por data.

### Público-Alvo
Pequenos empresários, comerciantes, autônomos e colaboradores de empresas que precisam registrar movimentações financeiras de forma **prática, digital e segura**.

---

## Estrutura de Dados

### Tabela: `users`

```ts
id: string
name: string
email: string
password: string (hash)
role: 'admin' | 'funcionario'
```

### Tabela: `transactions`

```ts
id: string
userId: string (FK)
type: 'entrada' | 'saida'
value: number
description: string
category: string
createdAt: Date
```

---

## Tecnologias Utilizadas

| Camada         | Tecnologias                                                         |
|----------------|----------------------------------------------------------------------|
| Back-end       | Node.js, TypeScript, Fastify                                        |
| Banco de Dados | PostgreSQL com Prisma ORM                                           |
| Autenticação   | JWT                                                                 |
| Validações     | Zod                                                                 |
| Front-end      | React + Tailwind CSS *(ou HTML/CSS puro para versão inicial)*       |
| Deploy         | Railway (back-end) + Vercel (front-end)                             |

---

## Fluxo de Uso

1. O usuário realiza login com e-mail e senha  
2. A tela inicial exibe as movimentações do dia e o saldo atual  
3. É possível adicionar entradas ou saídas com categorias e descrição  
4. Admins podem acessar o histórico completo e gerar relatórios  
5. Todos os dados são armazenados em banco e organizados por data  

---

## MVP: Produto Mínimo Viável

Para a primeira versão funcional (MVP), o foco será:

- Autenticação (login)
- Cadastro de movimentações
- Listagem com saldo diário
- Filtro de movimentações por data

---

## Funcionalidades Futuras

- Exportação em PDF/Excel  
- Notificações por e-mail  
- Dashboard com gráficos (Recharts)  
- Multi-empresa (controle por caixas separados)  

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/marcosmvr/controle-de-caixa.git

# Acesse o diretório
cd controle-de-caixa

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

> Certifique-se de configurar corretamente o arquivo `.env` com suas variáveis (banco de dados, JWT, etc).

---

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.

---

## Autor

Desenvolvido por [Marcos Vinicius Reis Oliveira](https://github.com/marcosmvr) 🚀

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
