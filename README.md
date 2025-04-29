# 🐳 Lucky Whale Raffles

<br>

## 📜 Descrição

Projeto fullstack para criar e gerenciar campanhas sem fins lucrativos, oferecendo brindes aos doadores. O sistema é dividido em duas partes:

- **Backend**: API RESTful para gerenciamento de campanhas e integração com banco de dados.
- **Frontend**: Interface de usuário para interação com as campanhas.

<br>

## 🔗 Links

- <a href="https://github.com/SrBaliardo/lucky-whale-raffles/tree/main/lucky-whale_backend">Backend</a>
- <a href="https://github.com/SrBaliardo/lucky-whale-raffles/tree/main/lucky-whale_frontend">Frontend</a>

<br>

## 📦 Tecnologias Utilizadas

- Backend: Node.js, Express, Prisma ORM
- Frontend: React, Vite
- Banco de Dados: PostgreSQL

<br>

## 📥 Como Rodar o Projeto

### 1. Clone o repositório:
  ```bash
  git clone https://github.com/SrBaliardo/lucky-whale-raffles.git
  ```

### 2. Iniciando o Backend

#### 2.1. Acesse a pasta do backend
  ```bash
  cd lucky-whale-raffles/lucky-whale_backend
  ```
  
  #### 2.2. Instale as dependências
   ```bash
  npm install
  ```

  #### 2.3. Configure as variáveis de ambiente copiando o arquivo .env-example para .env e ajustando conforme necessário.

  #### 2.4. Execute as migrações do banco de dados:
  ```bash
  npx prisma migrate dev
  ```
  
  #### 2.5. Inicie o servidor
   ```bash
  npm start
  ```

### 3. Iniciando o Frontend

  #### 3.1. Acesse a pasta do frontend
  ```bash
  cd lucky-whale-raffles/lucky-whale_frontend
  ```
  
  #### 3.2. Instale as dependências
   ```bash
  npm install
  ```
  
  #### 3.3. Inicie o servidor de desenvolvimento
   ```bash
  npm run dev
   ```

<br>

🤝 Autor
Desenvolvido por <a href="https://github.com/SrBaliardo">SrBaliardo</a>
