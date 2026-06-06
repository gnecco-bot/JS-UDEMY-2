const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite um número para calcular a multiplicação: ', (numero) => {
    num = parseInt(numero);

    if (!isNaN(num)) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} X ${i} = ${numero * i}`)
        }
    } else {
        console.log('Algo deu errado')
    }
    rl.close();
})