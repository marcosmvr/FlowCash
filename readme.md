<div id="top">

<!-- CABEÇALHO ESTILO CLÁSSICO -->
<div align="center">


# CONTROLE-DE-CAIXA

<em>Sistema de gerenciamento financeiro com autenticação de usuários e análise de transações</em>


</div>
<br>

---

## Índice

- [Índice](#índice)
- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
    - [Índice do Projeto](#índice-do-projeto)
- [Começando](#começando)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalação](#instalação)
    - [Uso](#uso)
    - [Testes](#testes)
- [Contribuição](#contribuição)

---

## Visão Geral

O Controle-de-Caixa é um sistema de gerenciamento financeiro desenvolvido em TypeScript com Fastify e Prisma. Ele oferece:

- Autenticação segura de usuários com JWT
- Gerenciamento de transações financeiras
- Filtros por data e categoria
- Análise de dados com IA (Google Gemini)
- API documentada com Swagger
- Controle de acesso baseado em roles (ADMIN/FUNCIONARIO)

---

## Funcionalidades

- ✅ Autenticação de usuários com JWT
- ✅ CRUD de transações financeiras
- ✅ Filtros avançados por data e categoria
- ✅ Resumo financeiro automático
- ✅ Integração com IA para análise de dados
- ✅ Cache para melhor desempenho
- ✅ Documentação Swagger da API
- ✅ Middlewares para segurança e tratamento de erros

---

## Estrutura do Projeto

```sh
└── controle-de-caixa/
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── readme.md
    ├── src
    │   ├── middlewares
    │   ├── prisma
    │   ├── routes
    │   ├── server.ts
    │   ├── services
    │   ├── tests
    │   └── types
    └── tsconfig.json
```

### Índice do Projeto

<details open>
	<summary><b><code>CONTROLE-DE-CAIXA/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>Arquivo</th>
					<th style='text-align: left; padding: 8px;'>Descrição</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>Configura o compilador TypeScript com opções estritas para melhor qualidade de código</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>Garante versões consistentes de todas as dependências</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>Configura o projeto com dependências principais e scripts</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/jest.config.js'>jest.config.js</a></b></td>
					<td style='padding: 8px;'>Configura o ambiente de testes com Jest e TypeScript</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- src Submodule -->
	<details>
		<summary><b>src</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ src</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>Arquivo</th>
					<th style='text-align: left; padding: 8px;'>Descrição</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/server.ts'>server.ts</a></b></td>
					<td style='padding: 8px;'>Configuração principal do servidor Fastify</td>
				</tr>
			</table>
			<!-- routes Submodule -->
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.routes</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>Arquivo</th>
							<th style='text-align: left; padding: 8px;'>Descrição</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/routes/cashRegisterAuthRoutes.ts'>cashRegisterAuthRoutes.ts</a></b></td>
							<td style='padding: 8px;'>Rotas de autenticação e usuários</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/routes/cashRegisterRoutes.ts'>cashRegisterRoutes.ts</a></b></td>
							<td style='padding: 8px;'>Rotas para gerenciamento de transações</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- services Submodule -->
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.services</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>Arquivo</th>
							<th style='text-align: left; padding: 8px;'>Descrição</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/services/geminiService.ts'>geminiService.ts</a></b></td>
							<td style='padding: 8px;'>Serviço de análise de dados com Gemini AI</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- middlewares Submodule -->
			<details>
				<summary><b>middlewares</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.middlewares</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>Arquivo</th>
							<th style='text-align: left; padding: 8px;'>Descrição</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/onlyAdmin.ts'>onlyAdmin.ts</a></b></td>
							<td style='padding: 8px;'>Middleware para restrição de acesso a admins</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/verifyJWT.ts'>verifyJWT.ts</a></b></td>
							<td style='padding: 8px;'>Middleware de autenticação JWT</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/cache.ts'>cache.ts</a></b></td>
							<td style='padding: 8px;'>Middleware de cache para melhor desempenho</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/errorHandler.ts'>errorHandler.ts</a></b></td>
							<td style='padding: 8px;'>Tratamento centralizado de erros</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Começando

### Pré-requisitos

- Node.js (v18 ou superior)
- npm (v9 ou superior)
- Banco de dados PostgreSQL

### Instalação

1. **Clone o repositório:**
    ```sh
    git clone https://github.com/marcosmvr/controle-de-caixa
    ```

2. **Acesse o diretório do projeto:**
    ```sh
    cd controle-de-caixa
    ```

3. **Instale as dependências:**
    ```sh
    npm install
    ```

4. **Configure o banco de dados:**
   - Crie um arquivo `.env` baseado no `.env.example`
   - Execute as migrações do Prisma:
     ```sh
     npx prisma migrate dev
     ```

### Uso

**Modo desenvolvimento:**
```sh
npm run dev
```

**Modo produção:**
```sh
npm start
```

A API estará disponível em `http://localhost:3333` e a documentação Swagger em `http://localhost:3333/docs`

### Testes

Execute os testes com:
```sh
npm test
```

---


## Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona feature incrível'`)
4. Push para a branch (`git push origin feature/incrivel`)
5. Abra um Pull Request

---

