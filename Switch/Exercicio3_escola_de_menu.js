const readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question(`Digite alguma das opções abaixo:
    1 Para pizza
    2 Para hambúrguer
    3 Para salada
$:`, (numero) => {
    numeroInt = parseInt(numero);

    switch (numeroInt) {
        case 1:
            console.log('Você escolheu pizza.');
            break;
        case 2:
            console.log('Você escolheu hambúrguer.');
            break;
        case 3:
            console.log('Você escolheu salada.');
            break;
        default:
            console.log('Opção inválida, Por favor, escolha 1, 2 ou 3.')
            break;
    }
    rl.close();
})