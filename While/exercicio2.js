const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite um número para eu contar: ', (numero) => {
    numero = parseInt(numero);

    if (isNaN(numero)) {
        console.log('Número digitado inválido');
        rl.close();
        return
    }

    let contador = 0;
    while (contador <= numero) {
        console.log(`Número atual da contagem: ${contador}`)
        contador++;
    };
    rl.close()
})