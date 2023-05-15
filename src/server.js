// Padrões de importações
    // CommonJs => require 
    //ESModules => import/export ; [Por padrão o node não suporta o ESModules]
    // Para ativar o ESModules, precisamos ir no package.json e colocar   "type": "module",

//Usando commonJs
// const http = require('http')

// Usando ESModules
import http from 'node:http'

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

const users = []

const server = http.createServer((req, res) =>{
    const {method, url} = req
    if(method === 'GET' && url === '/users'){
        //Early return
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users'){
        users.push({
            id:1,
            name: 'Jonh Doe',
            email: 'jonhdoe@example.com'
        })
        return res.end('Criação de usuários ')
    }


    return res.end('Hello Word: NodeJs: Fundamentos do Node')
})

// Expecificando a porta do servidor
server.listen(3333)