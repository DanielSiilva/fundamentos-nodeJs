// Uma api do node para trabalhar com dados de forma binaria e armazenar esses dados em memoria. 
// Podendo ser trabalhado de forma decimal e hexadecimal

const buf = Buffer.from("hello")

console.log(buf.toJSON())