const fs = require('node:fs')
const {promisify} = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log('leyendo el primer archivo')
fs.readFilePromise('./archivo.txt', 'utf-8',(err, text)=>{
    console.log('primer texto:', text)
})



console.log('-->hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8',(err, text)=>{
    console.log('segundo texto:',text)
})
