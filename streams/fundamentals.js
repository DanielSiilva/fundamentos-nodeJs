// Readable Streams [lendo] / Writable Streams [enviando ]

// Toda porta de entrada e saída em Node, é uma Streams.

// Streams ->

// stdin => é tudo que o usuario digita no terminal => é uma stream de leitura ;
// stdout => é uma stream de escrita, saida. 
// process.stdin
//   .pipe(process.stdout)


//      Readable: stream de leitura 
//      Writable: stream de escrita
//      Transform: stream de tranformacao
import { Readable, Writable ,  Transform,  } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  // Metodo obrigatorio 
  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000);
  }
}

class InverseNumberStream extends Transform {
    // Metodo obrigatorio 
    _transform(chunk, encoding, callback) {
      const transformed = Number(chunk.toString()) * -1
  
      callback(null, Buffer.from(String(transformed)))
    }
  }
  
class MultiplyByTenStream extends Writable {
    // Metodo obrigatorio 
    _write(chunk, encoding, callback) {
      console.log(Number(chunk.toString()) * 10)
      callback()
    }
}
  
new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())