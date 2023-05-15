import http from 'node:http'

const posts = [
    {
        post: 'Receita 01',
        data: new Date()
    }
]

const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method === 'GET' && url === '/posts'){
       return res
            .setHeader('Content-type', 'application-json')
            .end(JSON.stringify(posts))
    }

    // Por padrão o MEtodo GET tem status Code 200
    if(method === 'GET' && url === '/filterUser'){
        const filterUser = posts.filter(post => post.post.includes('No'))
        
        return res
                .setHeader('Content-type', 'application-json')
                .end(JSON.stringify(filterUser))
    }

    if(method === 'POST' && url === '/posts'){
        posts.push({
            post: 'Nova Recita',
            data: new Date()
        })

        res.writeHead(201).end('post created')
    }

    return res.writeHead(404).end()
})

server.listen(3333)