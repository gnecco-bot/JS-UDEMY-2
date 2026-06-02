const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,

    output: process.stdout
});

r1.question('Qual é o seu nome? ', (resposta) => {
    console.log(`Olá, ${resposta}`);

    r1.close();
})