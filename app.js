// requireds
//const fs = require('fs'); // Libreria que ya existe en node, por eso se puede cargar así no más
//const fs = require('express'); por paquetes que no son nativos de node, que son expansiones
//const fs = require('./fs'); archivos locales

const argv = require('./config/yargs').argv;
const colors = require('colors');

// Destructurar el objeto
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // Es redundante colocar .js

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.bgGreen }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

//console.log(argv);
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log('Limite', argv.limite);