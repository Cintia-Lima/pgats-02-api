# API de Transferências

Esta API permite realizar operações de login, registro de usuários, consulta de usuários e transferência de valores, com regras básicas para aprendizado de testes e automação de APIs.

## Funcionalidades
- **Registro de usuário**: Não permite usuários duplicados.
- **Login**: Requer usuário e senha.
- **Consulta de usuários**: Lista todos os usuários registrados.
- **Transferência de valores**:
  - Só permite transferências acima de R$ 5.000,00 para destinatários marcados como "favorecido".
  - Para não favorecidos, o valor máximo é R$ 5.000,00.
- **Documentação Swagger**: Disponível em `/api-docs`.

## Instalação
1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```powershell
   npm install express swagger-ui-express
   ```

## Execução
- Para iniciar o servidor:
  ```powershell
  node server.js
  ```
- A API estará disponível em `http://localhost:3000`.
- Acesse a documentação Swagger em `http://localhost:3000/api-docs`.

## Endpoints
- `POST /register` — Registro de usuário
- `POST /login` — Login
- `GET /users` — Consulta de usuários
- `POST /transfer` — Realizar transferência
- `GET /transfers` — Consulta de transferências

## Estrutura de Diretórios
- `controllers/` — Lógica dos endpoints
- `services/` — Regras de negócio
- `models/` — Dados em memória
- `app.js` — Configuração da aplicação Express
- `server.js` — Inicialização do servidor
- `swagger.json` — Documentação da API

## Observações
- O banco de dados é em memória, os dados são perdidos ao reiniciar o servidor.
- Ideal para estudos e testes automatizados com ferramentas como Supertest.

---

API desenvolvida para fins educacionais.
