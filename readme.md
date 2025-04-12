Funcionalidades Principais

### 1. **Autenticação**

- Login e logout (usuário e senha)
- Recuperação de senha (opcional)
- Diferenciação de perfis: `admin` e `funcionário` (nível de acesso)

### 2. **Registro de Movimento Financeiro**

- Campos:
  - Tipo: `Entrada` ou `Saída`
  - Valor (R$)
  - Descrição
  - Categoria (ex: vendas, manutenção, compra, saque etc.)
  - Data e hora (auto ou manual)

### 3. **Visualização do Caixa**

- Listagem das movimentações do dia
- Total de entradas, total de saídas e saldo final
- Filtros por data e categoria

### 4. **Histórico**

- Listagem completa por período (ex: semana, mês)
- Busca por descrição e categoria
- Exportação para `.csv` ou `.pdf` (bônus)

### 5. **Painel Administrativo**

- Visualização de todos os registros
- Cadastro de novos usuários (funcionários)
- Relatórios de movimentação por funcionário (opcional)
  Estrutura de Dados (simplificada)

### Tabela: `users`

```ts
id: string
name: string
email: string
password: string(hash)
role: 'admin' | 'funcionario'
```

### Tabela: `transactions`

```ts
id: string
userId: string(FK)
type: 'entrada' | 'saida'
value: number
description: string
category: string
createdAt: Date
```
