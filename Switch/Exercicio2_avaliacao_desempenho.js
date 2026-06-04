const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Digite uma nota de 0 a 100: ', (numero) => {
    numeroInt = parseInt(numero);
    let nota;

    const categoria = Math.floor(numeroInt / 10);

    switch (categoria) {
        case 10:
        case 9:
            nota = 'A';
            break;

        case 8:
            nota = 'B'
            break;

        case 7:
            nota = 'C';
            break;

        case 6:
            nota = 'D';
            break;

        default:
            nota = 'F'
            break;
    }
    console.log('Sua nota é ' + nota);
    rl.close()
});