# 

:spiral_calendar: Atualizado em 17 de Novembro de 2021 :heart:



# Microserviço de autenticação com Nodejs

Este projeto foi proposto pela Digital Innovation One - Link do código original: https://github.com/RenanJPaula/dio-node-user-authentication-api

## Explorando o Estilo Arquitetural REST com Node 💻

- [x]  Criando uma API REST na Prática com Node.js + Express
  - [x]  Explorando métodos do módulo com typescript
  - [x]  
  - [x]  Instalando bibliotecas e dependências 
  - [x]  configurando para a conversão do ts para js seja de forma automática, através do npm install--save-dev-node-dev
  - [x]  explorando o método nativo setInterval()
  - [x]  melhorar o código
  
- [x] Utilizando padrão do StatusCode para transformar o código mais legível, através do uso da biblioteca :

- [ ] \- -save http-status-codes  >> importando o import {StatusCodes} from "http-status-codes"

  e usando *res*.status(*StatusCodes*.OK).send(users)

  

## Adição dos end-points responsáveis pelo CRUD de Usuários e Status da nossa aplicação ✈️↔💻

- [x]  Criar Rotas para End-Points
  - [x] Utilizando typescript para garantir que que os dados sejam padronizados, exemplo na rota por id de usuários : 
  
  - [ ] usersRoute.get("/users/:uuid", (*req*: *Request*<{ uuid : *string*}>, *res*: *Response*, *next*: *NextFunction*) => {
  
    const uuid = *req*.params.uuid



# Descrição
Este é um projeto desenvolvido durante lives dentro da [DIO](https://digitalinnovation.one/)

Neste projeto criamos end-points responsáveis pelo **CRUD** de Usuário e Status da aplicação. 🔨🔧

São eles:



### Status

- GET /status

  

### Usuários

- GET /users

- GET /users/:uuid

- POST /users

- PUT /users/:uuid

- DELETE /users/:uuid

  

* Exemplo do servidor local:

```
http://localhost:3000/users & http://localhost:3000/status
```

# Exemplos de telas

![ProjetosDio](https://imgur.com/a/i8GnnBo)

* 
