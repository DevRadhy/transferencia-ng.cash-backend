# Transferências Backend (NG.CASH)

# Introdução
Um projeto fullstack criado em um teste para a vaga **Desenvolvedor Backend Júnior** na empresa **NG.CASH**, baseado em uma fintech, alguns do requisitos do projeto foram:

- Cadastro de Usuário
- Login com JWT com válidade de 24h
- Transferência entre usuários
- Ver o histórico de transferências

<!-- features extras adicionadas ao projeto:

- Error handler
- Lint de código
- Testes automatizados -->

# Tecnologias
Algumas das ferramentas usadas no desenvolvimento do projeto foram:

- Node.js
- Typescript
- Express
- TypeORM
- DotENV
- PostgreSQL
<!-- - Docker
- ESLint
- JWT -->

# Iniciando o projeto
Começe clonando esse repositório com:

```bash
git clone "link"
# ou gh repo clone "repo name"
```

após fazer isso, instale os pacotes do projeto com o seguinte comando:

```bash
yarn install
# ou npm install
```

o próximo passo é definir as variáveis de ambiente, para isso crie um arquivo `.env` na raiz do projeto e difina algumas variáveis, você pode ver um exemplo [aqui](./.env.example):

```env
PORT=project_port

POSTGRES_DB="database_name"
POSTGRES_USER="database_user"
POSTGRES_PASSWORD="database_password"
```

agora é só iniciar o projeto com o comando:

```bash
yarn dev
# ou npm run dev
```