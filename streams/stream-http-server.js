import http from 'node:http'
import { Transform } from 'node:stream'



class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1
    console.log(transformed)
    callback(null, Buffer.from(String(transformed)))
  }
}
// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {
  const buffers = []

   // podemos utilizar a funcionalidade de for await para percorrer nossa stream e conseguir trabalhar com os dados completos da stream.

   // O for await vai garantir que nossa aplicação não execute a lógica antes de finalizar a leitura da stream.
   
  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)

  return res.end(fullStreamContent)
})

server.listen(3334)