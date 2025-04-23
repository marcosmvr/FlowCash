<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="readmeai/assets/logos/purple.svg" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# CONTROLE-DE-CAIXA

<em></em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/marcosmvr/controle-de-caixa?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/marcosmvr/controle-de-caixa?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/marcosmvr/controle-de-caixa?style=default&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/marcosmvr/controle-de-caixa?style=default&color=0080ff" alt="repo-language-count">

<!-- default option, no dependency badges. -->


<!-- default option, no dependency badges. -->

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview



---

## Features

<code>❯ REPLACE-ME</code>

---

## Project Structure

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

### Project Index

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
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Tsconfig.json` configures the TypeScript compiler<br>- It specifies the JavaScript language version, module system, and various compiler options influencing code generation and type checking<br>- The configuration prioritizes strict type checking and CommonJS modules, enhancing code quality and maintainability across the project<br>- It also omits type checking of library declaration files to improve compilation speed.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>- The <code>package-lock.json</code> file specifies the projects dependencies for the controle-de-caixa" (cash control) application<br>- It ensures that the project uses consistent versions of all required Node.js packages, including security features (Helmet), rate limiting, Swagger documentation, and potentially AI integration (Google Generative AI)<br>- This file is crucial for the project's build process and reproducibility, guaranteeing that all developers work with the same libraries.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Package.json` configures the controle-de-caixa project<br>- It specifies project metadata, dependencies for a Fastify-based server using Prisma for database interaction, and development tools including Jest for testing and TypeScript for development<br>- The configuration facilitates building and running the application, leveraging libraries for security, rate limiting, API documentation, and AI integration.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/jest.config.js'>jest.config.js</a></b></td>
					<td style='padding: 8px;'>- Jest configuration establishes the testing environment for the TypeScript project<br>- It specifies Node.js as the runtime and utilizes ts-jest for transforming TypeScript files during testing<br>- This ensures consistent and reliable execution of unit tests within the broader projects testing infrastructure<br>- The configuration facilitates seamless integration with the testing framework.</td>
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
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/server.ts'>server.ts</a></b></td>
					<td style='padding: 8px;'>- The server file bootstraps a Fastify application, integrating authentication routes, cash register functionalities, and middleware for error handling and rate limiting<br>- It incorporates Swagger for API documentation and utilizes environment variables<br>- The application exposes a health check endpoint and listens on port 3333, gracefully shutting down on SIGINT signals.</td>
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
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/routes/cashRegisterAuthRoutes.ts'>cashRegisterAuthRoutes.ts</a></b></td>
							<td style='padding: 8px;'>- AuthRoutes defines API endpoints for user registration and authentication within a cash register system<br>- It handles user creation, login via JWT token generation, and provides an admin-only endpoint for retrieving all registered users<br>- The module leverages Prisma for database interaction and bcrypt for password hashing, ensuring secure user management.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/routes/cashRegisterRoutes.ts'>cashRegisterRoutes.ts</a></b></td>
							<td style='padding: 8px;'>- CashRegisterRoute defines API endpoints for managing financial transactions<br>- It allows creating new transactions and retrieving transaction lists, filtered by date and category<br>- Admin-only endpoints provide a summary of financial activity, leveraging an AI service for intelligent analysis and employing caching for performance optimization<br>- Authentication and authorization middleware ensure secure access.</td>
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
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/services/geminiService.ts'>geminiService.ts</a></b></td>
							<td style='padding: 8px;'>- GeminiService provides a financial summarization service<br>- It leverages Googles Gemini AI model to analyze transaction data and generate a Portuguese summary<br>- The summary includes total balance, highest transaction day, most frequent category, and a concise overview<br>- This service integrates with a larger application, likely handling financial data processing and reporting.</td>
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
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/onlyAdmin.ts'>onlyAdmin.ts</a></b></td>
							<td style='padding: 8px;'>- OnlyAdmin.ts` acts as a middleware function, enforcing access control within the application<br>- It verifies user roles, permitting requests only from users with ADMIN privileges<br>- Unauthorized access results in a 403 Forbidden response<br>- This middleware contributes to the overall security architecture by restricting sensitive functionalities to authorized personnel.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/verifyJWT.ts'>verifyJWT.ts</a></b></td>
							<td style='padding: 8px;'>- JWT verification middleware authenticates users by extracting and validating JSON Web Tokens from authorization headers<br>- Upon successful verification, it adds user details to the request object for subsequent route handlers<br>- Failure results in a 401 Unauthorized response, enhancing application security within the Fastify framework<br>- The middleware is crucial for protecting secured endpoints.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/cache.ts'>cache.ts</a></b></td>
							<td style='padding: 8px;'>- The <code>cache.ts</code> middleware provides a centralized caching mechanism for the application<br>- It utilizes Node-Cache to store data temporarily, improving performance by reducing redundant computations or database queries<br>- A default TTL of one hour is configured, with cleanup occurring every ten minutes<br>- This module is readily accessible throughout the application via its export.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/errorHandler.ts'>errorHandler.ts</a></b></td>
							<td style='padding: 8px;'>- The <code>errorHandler</code> middleware centralizes error handling within the Fastify application<br>- It processes validation errors from Zod, database errors from Prisma, and generic errors<br>- For development, detailed error information is included in the response; otherwise, a generic server error message is returned, maintaining a consistent user experience while aiding debugging.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/filterByDateAndCategory.ts'>filterByDateAndCategory.ts</a></b></td>
							<td style='padding: 8px;'>- The middleware function <code>filterByDateAndCategory</code> refines transaction queries<br>- It augments incoming requests with filtering criteria based on optional <code>startDate</code>, <code>endDate</code>, and <code>category</code> parameters<br>- These parameters dynamically build <code>where</code> clauses for database queries, enabling efficient data retrieval within the applications transaction processing pipeline<br>- This enhances the applications ability to serve customized data based on user-specified filters.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/middlewares/transactionQuery.ts'>transactionQuery.ts</a></b></td>
							<td style='padding: 8px;'>- TransactionQuery defines a data structure<br>- It facilitates querying transactions within the application by specifying optional parameters for start and end dates, and transaction category<br>- This structure likely serves as an input to a function or middleware responsible for filtering and retrieving transaction data, contributing to the applications data access layer.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- types Submodule -->
			<details>
				<summary><b>types</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.types</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/types/fastify.d.ts'>fastify.d.ts</a></b></td>
							<td style='padding: 8px;'>- The <code>fastify.d.ts</code> file extends Fastifys request object<br>- It augments requests with a <code>filter</code> property for transaction queries and a <code>user</code> property containing user ID, email, and role (ADMIN or FUNCIONARIO)<br>- This enhances the applications type safety and provides standardized access to crucial request data throughout the Fastify server.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- prisma Submodule -->
			<details>
				<summary><b>prisma</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ src.prisma</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/schema.prisma'>schema.prisma</a></b></td>
							<td style='padding: 8px;'>- The <code>schema.prisma</code> file defines the data model for a financial application<br>- It uses PostgreSQL as the database and specifies models for users and their transactions, including attributes like user roles, transaction types, and timestamps<br>- A Prisma Client is generated to interact with this database schema, facilitating data access within the application<br>- The schema supports user authentication and management, along with detailed transaction tracking.</td>
						</tr>
					</table>
					<!-- migrations Submodule -->
					<details>
						<summary><b>migrations</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.prisma.migrations</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/migrations/migration_lock.toml'>migration_lock.toml</a></b></td>
									<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
								</tr>
							</table>
							<!-- 20250413000032_add_role_to_user Submodule -->
							<details>
								<summary><b>20250413000032_add_role_to_user</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.prisma.migrations.20250413000032_add_role_to_user</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/migrations/20250413000032_add_role_to_user/migration.sql'>migration.sql</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- 20250422195019_make_description_optional Submodule -->
							<details>
								<summary><b>20250422195019_make_description_optional</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.prisma.migrations.20250422195019_make_description_optional</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/migrations/20250422195019_make_description_optional/migration.sql'>migration.sql</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- 20250412230227_init Submodule -->
							<details>
								<summary><b>20250412230227_init</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.prisma.migrations.20250412230227_init</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/migrations/20250412230227_init/migration.sql'>migration.sql</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- 20250412231637_create_users Submodule -->
							<details>
								<summary><b>20250412231637_create_users</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.prisma.migrations.20250412231637_create_users</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/migrations/20250412231637_create_users/migration.sql'>migration.sql</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<!-- generated Submodule -->
					<details>
						<summary><b>generated</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ src.prisma.generated</b></code>
							<!-- prisma Submodule -->
							<details>
								<summary><b>prisma</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ src.prisma.generated.prisma</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/index.d.ts'>index.d.ts</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/edge.js'>edge.js</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/index.js'>index.js</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/client.js'>client.js</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/index-browser.js'>index-browser.js</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/default.js'>default.js</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/schema.prisma'>schema.prisma</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/edge.d.ts'>edge.d.ts</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/default.d.ts'>default.d.ts</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/wasm.d.ts'>wasm.d.ts</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/libquery_engine-debian-openssl-3.0.x.so.node'>libquery_engine-debian-openssl-3.0.x.so.node</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/client.d.ts'>client.d.ts</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/package.json'>package.json</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/wasm.js'>wasm.js</a></b></td>
											<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
										</tr>
									</table>
									<!-- runtime Submodule -->
									<details>
										<summary><b>runtime</b></summary>
										<blockquote>
											<div class='directory-path' style='padding: 8px 0; color: #666;'>
												<code><b>⦿ src.prisma.generated.prisma.runtime</b></code>
											<table style='width: 100%; border-collapse: collapse;'>
											<thead>
												<tr style='background-color: #f8f9fa;'>
													<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
													<th style='text-align: left; padding: 8px;'>Summary</th>
												</tr>
											</thead>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/runtime/edge.js'>edge.js</a></b></td>
													<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/runtime/react-native.js'>react-native.js</a></b></td>
													<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/runtime/index-browser.js'>index-browser.js</a></b></td>
													<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/runtime/edge-esm.js'>edge-esm.js</a></b></td>
													<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/runtime/library.d.ts'>library.d.ts</a></b></td>
													<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/runtime/index-browser.d.ts'>index-browser.d.ts</a></b></td>
													<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/runtime/library.js'>library.js</a></b></td>
													<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
												</tr>
												<tr style='border-bottom: 1px solid #eee;'>
													<td style='padding: 8px;'><b><a href='https://github.com/marcosmvr/controle-de-caixa/blob/master/src/prisma/generated/prisma/runtime/wasm.js'>wasm.js</a></b></td>
													<td style='padding: 8px;'>Code>❯ REPLACE-ME</code></td>
												</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build controle-de-caixa from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/marcosmvr/controle-de-caixa
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd controle-de-caixa
    ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->
	<!-- [![npm][npm-shield]][npm-link] -->
	<!-- REFERENCE LINKS -->
	<!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
	<!-- [npm-link]: https://www.npmjs.com/ -->

	**Using [npm](https://www.npmjs.com/):**

	```sh
	❯ npm install
	```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm start
```

### Testing

Controle-de-caixa uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm test
```

---

## Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## Contributing

- **💬 [Join the Discussions](https://github.com/marcosmvr/controle-de-caixa/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/marcosmvr/controle-de-caixa/issues)**: Submit bugs found or log feature requests for the `controle-de-caixa` project.
- **💡 [Submit Pull Requests](https://github.com/marcosmvr/controle-de-caixa/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/marcosmvr/controle-de-caixa
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/marcosmvr/controle-de-caixa/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=marcosmvr/controle-de-caixa">
   </a>
</p>
</details>

---

## License

Controle-de-caixa is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- Credit `contributors`, `inspiration`, `references`, etc.

<div align="right">

[![][back-to-top]](#top)

</div>


[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square


---
