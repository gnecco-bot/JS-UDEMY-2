const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Digite o número de um mes para saber a estação do ano: ', (numero) => {
    let numerInt = parseInt(numero);
    switch (numerInt) {
        case 12:
        case 1:
        case 2:
            console.log('Verão')
            break;

        case 3:
        case 4:
        case 5:
            console.log('Outono')
            break;

        case 6:
        case 7:
        case 8:
            console.log('Inverno')
            break;

        case 9:
        case 10:
        case 11:
            console.log('Primavera')
            break;

        default:
            console.log('Algo deu errado')
    };
    rl.close()
})