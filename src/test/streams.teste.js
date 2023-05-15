import {Readable, Writable, Transform} from 'node:stream'

class Numbers extends Readable{
    index = 1

    _read(){
        const i = this.index++

        setTimeout(()=>{
            if(i > 5){
                this.push(null)
            }else{
                //Buffer é a forma que o node ler streams
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)
    }
}

class DoubleNUmber extends Transform{
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * 2
    
        callback(null, Buffer.from(String(transformed)))
      }

}

class MultiplyStream extends Writable{
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 2)
        callback()
      }
}

new Numbers()
    .pipe(new DoubleNUmber())
    .pipe(new MultiplyStream())