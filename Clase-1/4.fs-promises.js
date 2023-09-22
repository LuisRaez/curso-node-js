//esto solo en los modulos nativos
//que no tienen promesas nativas

//const {promisify} = require('node:util')
//const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')
const { text } = require('stream/consumers')

console.log('leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8')
.then(text=>{
    console.log('primer texto:',text)
})


console.log('-->hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8')
.then(text=>{
    console.log('segundo texto:',text)
})