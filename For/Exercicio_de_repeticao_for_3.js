const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let numeroFatorado = 1;

rl.question('Digite um número: ', (numero) => {
    for (let i = 1; i <= numero; i++) {
        numeroFatorado *= i
    }
    console.log(`O fatorial do número ${numero} é de: ${numeroFatorado}`)
    rl.close()
})  
