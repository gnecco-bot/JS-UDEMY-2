const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const palavras = ['pedra', 'papel', 'tesoura', 'maçã', 'caderno', 'mouse'];
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]

let palavraDisplay = '_'.repeat(palavraSecreta.length);
const maxTentativas = 6;
let tentativasErradas = 0;

function solicitarLetra() {
    console.log(`Palavra: ${palavraDisplay}`);
    if (tentativasErradas < maxTentativas) {
        readline.question('Adivinhe uma letra: ', letra => {
            processarJogada(letra.toLowerCase())
        })
    } else {
        console.log(`Você recebeu o número maximo de tentaivas.`);
        console.log(`A palavra era: ${palavraSecreta}`);
        readline.close();
    }
}

function processarJogada(letra) {
    if (palavraSecreta.includes(letra)) {
        atualizarPalavraDisplay(letra);
    } else {
        tentativasErradas++;
        console.log(`Letra incorreta. Você tem ${maxTentativas - tentativasErradas} tentativa(s) restante(s).`)
    }

    if (palavraDisplay === palavraSecreta) {
        console.log('Parabéns você adivinhou a palavra.')
        readline.close();
    } else {
        solicitarLetra();
    }
}

function atualizarPalavraDisplay(letra) {
    let resultado = '';
    let i = 0;
    while (i < palavraSecreta.length) {
        if (palavraSecreta[i] === letra) {
            resultado += letra;
        } else {
            resultado += palavraDisplay[i];
        }
        i++;
    }
    palavraDisplay = resultado
}

solicitarLetra();