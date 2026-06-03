const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

r1.question('Digite um número: ', (numero1) => {
    r1.question('digite outro número: ', (numero2 => {
        if (numero1 > numero2) {
            console.log('Primeiro número digitado ' + numero1 + ' é maior que ' + numero2)
        } else if (numero2 > numero1) {
            console.log('Segundo número digitado, ' + numero2 + ' é maior que o ' + numero2)
        } else {
            console.log('Os números são iguais.')
        }
        r1.close();
    }))
})