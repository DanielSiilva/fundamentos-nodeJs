// Padrões de importações
    // CommonJs => require 
    //ESModules => import/export ; [Por padrão o node não suporta o ESModules]
    // Para ativar o ESModules, precisamos ir no package.json e colocar   "type": "module",

//Usando commonJs
// const http = require('http')

// Usando ESModules
//Iniciando o servidor

// - HTTP
//    - Metodo HTTP
//    - URL

//  GET, POST, PUT, PATCH, DELETE

// GET =>  Buscar uma recurso do back-end ;
// POST => Criar uma recurso no back-end ;
// PUT => Aualizar um recurso no back-end ;
// PET => Atualizar uma informação especifica de um recurso do back-end ;
// DELETE => Deletar um recurso do back-end ;


// Tipos de aplicações
    // Stateful (enquando o servidor roda) - Stateless (banco de dados e etc)

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisição/resposta) => Metadados

// HTTP Status Code 
// => https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
// Route Parameters: Identificação de recurso
// Request Body: Envio de informações de um formulário (HTTPs)

//http://localhost:3333/users?userId=1&name=Diego

// GET http://localhost:3333/users/1
// DELETE http: //localhost:3333/users/1

// POST http://localhost:3333/users

// Edição e remoção



import http from 'node:http'

import { json } from './middlewares/json.js'
import { routes } from './routes.js'

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path === url
  })

  if (route) {
    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})


server.listen(3333)