const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinharNumero() {
    readline.question("Adivinhe um número entre 1 e 100: ", (numero) => {
        numero = parseInt(numero);
        if (numero === numeroSecreto) {
            console.log("Parabéns! Você acertou o número!");
            readline.close();
        } else {
            if (numero < numeroSecreto) {
                console.log(`Mais alto! O número é: ${numeroSecreto}. Tente novamente`);
            } else {
                console.log(`Mais baixo! O número é: ${numeroSecreto}. Tente novamente`);
            }
            adivinharNumero();
        }
    });
}

adivinharNumero();
