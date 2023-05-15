// Readable Streams [lendo] / Writable Streams [enviando ]

// Toda porta de entrada e saída em Node, é uma Streams.

// Streams ->

// stdin => é tudo que o usuario digita no terminal => é uma stream de leitura ;
// stdout => é uma stream de escrita, saida. 
// process.stdin
//   .pipe(process.stdout)


//      Readable: stream de leitura 
import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

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

new OneToHundredStream()
  .pipe(process.stdout)