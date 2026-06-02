const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('Por favor, insira seu nome: ', (nome) => {
    r1.question('Por favor, insira sua idade: ', (idade) => {
        r1.question('Por favor, insiria a sua cidade: ', (cidade) => {
            console.log(`Olá ${nome}! Você tem ${idade} anos e mora em ${cidade}.`)
        });
    });
});