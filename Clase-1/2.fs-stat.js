const fs = require('node:fs') // a partir de node 16 se recomienda poner los 2 puntos = node:

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
)
