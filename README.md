# UPA Helper - API

### Descrição

API de uma plataforma de gestão em saúde com foco em pequenos hospitais com pronto atendimento para auxiliar nas operações da recepção, consulta medica, ambulatório, farmácia, laboratório, radiologia e estoque.

### Tecnologias

- [NestJS](https://nestjs.com/)
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
- [Passport](https://github.com/jaredhanson/passport)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Swagger](https://swagger.io/)

### Pré-requisitos

Antes de começar, é preciso ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- [VSCode](https://code.visualstudio.com/)

### Instalação

```bash
$ npm install
```

### Rodando localmente

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Features

- [x] Cadastro de Usuário
- [x] Edição de Usuário
- [x] Atualização de Usuário
- [x] Exclusão de Usuário
- [x] Listagem dos Usuários
- [x] Cadastro de Paciente
- [x] Edição de Paciente
- [x] Atualização de Paciente
- [x] Exclusão de Paciente
- [x] Listagem dos Pacientes
- [x] Cadastro de Ficha de Atendimento
- [x] Listagem dos Atendimentos
- [x] Cadastro de Triagem para Atendimento
- [x] Listagem dos Fichas para Triagem
- [x] Cadastro de Consulta
- [x] Listagem dos Fichas para Consulta
- [x] Listagem dos Sala de Espera
