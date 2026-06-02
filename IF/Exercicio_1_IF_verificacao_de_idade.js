const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

r1.question('Qual a sua idade? ', (resposta) => {
    if (resposta >= 18) {
        console.log('Você é maior de idade.')
    } else {
        console.log('Você é menor de idade.')
    }
    r1.close();
})