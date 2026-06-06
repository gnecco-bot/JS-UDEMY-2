const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let numeroFatorado = 0;

rl.question('Digite um número: ', (numero) => {
    for (let i = 1; i <= numero; i++) {
        numeroFatorado += numero * i
    }
    console.log(`O fatorial do número mencionado é de: ${numeroFatorado}`)
    rl.close()
})  