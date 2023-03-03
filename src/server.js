import http from 'node:http'

const server = http.createServer((req, res)=>{
    return res.end('Hello word - Isso é um teste')
})

server.listen(3333)