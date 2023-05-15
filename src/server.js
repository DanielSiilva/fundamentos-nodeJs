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

const server = http.createServer((req, res) =>{
    const {method, url} = req
    if(method === 'GET' && url === '/users'){
        //Early return
        return res.end('Listagem de usuários')
    }

    if(method === 'POST' && url === '/users'){
        return res.end('Criação de usuários ')
    }


    return res.end('Hello Word: NodeJs: Fundamentos do Node')
})

//Expecificanod a porta do servidor
server.listen(3333)