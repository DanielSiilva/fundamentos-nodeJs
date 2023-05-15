// Padrões de importações
    // CommonJs => require 
    //ESModules => import/export ; [Por padrão o node não suporta o ESModules]
    // Para ativar o ESModules, precisamos ir no package.json e colocar   "type": "module",

//Usando commonJs
// const http = require('http')

// Usando ESModules
import http from 'node:http'

//Iniciando o servidor

const server = http.createServer((req, res) =>{
    return res.end('Hello Word')
})

//Expecificanod a porta do servidor
server.listen(3333)