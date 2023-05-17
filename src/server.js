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


import http from 'node:http'
import { Database } from './database.js'
import { json } from './middlewares/json.js'

const database = new Database()

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (method === 'GET' && url === '/users') {
    const users = database.select('users')

    return res.end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body

    const user = {
      id: 1,
      name,
      email,
    }

    database.insert('users', user)

    return res.writeHead(201).end()
  }
  return res.writeHead(404).end()
})
server.listen(3333)