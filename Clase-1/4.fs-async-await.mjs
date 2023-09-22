// esto solo en los modulos nativos
// que no tienen promesas nativas

// const {promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

console.log('leyendo el primer archivo')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log('-->hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo')
const secondtext = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondtext)
