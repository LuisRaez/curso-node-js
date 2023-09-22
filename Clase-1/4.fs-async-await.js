//esto solo en los modulos nativos
//que no tienen promesas nativas

//const {promisify} = require('node:util')
//const readFilePromise = promisify(fs.readFile)

const {readFile} = require('node:fs/promises')

async function init(){
    console.log('leyendo el primer archivo')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto:',text)



        console.log('-->hacer cosas mientras lee el archivo...')

        console.log('leyendo el segundo archivo')
        const secondtext = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto:',secondtext)
}

init()
//IIFE - Inmediatly Invoked Function Expresssion

//esto es lo mismo que con el function init
// ;(
//     async ()=>{
//         console.log('leyendo el primer archivo')
//         const text = await readFile('./archivo.txt', 'utf-8')
//         console.log('primer texto:',text)



//         console.log('-->hacer cosas mientras lee el archivo...')

//         console.log('leyendo el segundo archivo')
//         const secondtext = await readFile('./archivo2.txt', 'utf-8')
//         console.log('segundo texto:',secondtext)
//     }
// )()


