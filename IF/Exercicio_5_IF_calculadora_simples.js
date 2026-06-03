const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite um número: ', (numero1) => {
    rl.question('Digite outro número: ', (numero2) => {
        rl.question('Agora digite a operação aritmetica: ', (operador) => {
            let numeroUm = parseInt(numero1);
            let numeroDois = parseInt(numero2);
            if (operador === "+") {
                console.log(numeroUm + numeroDois);
            } else if (operador === "-") {
                console.log(numeroUm - numeroDois);
            } else if (operador === "*") {
                console.log(numeroUm * numeroDois);
            } else if (operador === "/") {
                if (numeroDois !== 0) {
                    console.log(numeroUm / numeroDois);
                } else {
                    console.log('Divisão por zero não é possivel.')
                }
            } else {
                console.log('Alguma coisa deu errado!')
            }
            rl.close();
        })
    })
})