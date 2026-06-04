const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("insira um número qualquer: ", (numero) => {
    let estado
    const numeroInt = parseInt(numero);

    if (numeroInt > 0) {
        estado = 'é maior que zero (positivo).'
    } else if (numeroInt < 0) {
        estado = 'é menor que zero (negativo).'
    } else if (numeroInt == 0) {
        estado = 'é igual a zero.'
    } else {
        console.log('Algo deu errado')
    }
    console.log(`O número digitado "${numero}" ` + estado);

    rl.close()
})