const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question('Digite um número para verificar se é impar ou par: ', (numero) => {
    const par_ou_impar = numero % 2;
    if (par_ou_impar === 0) {
        console.log('O número digitado é par');
    } else {
        console.log('O número digitado é ímpar');
    };
    r1.close();
})