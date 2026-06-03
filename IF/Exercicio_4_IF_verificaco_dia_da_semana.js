const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

r1.question('Digite um número da semana: ', (numero) => {
    if (numero == 1) {
        console.log('DOMINGO')
    } else if (numero == 2) {
        console.log('SEGUNDA')
    } else if (numero == 3) {
        console.log('TERÇA')
    } else if (numero == 4) {
        console.log('QUARTA')
    } else if (numero == 5) {
        console.log('QUINTA')
    } else if (numero == 6) {
        console.log('SEXTA')
    } else if (numero == 7) {
        console.log('SÁBADO')
    } else {
        console.log('Digitou algum número errado, tenta novamente entre 1 e 7.')
    }
    r1.close();
})