function somar(a, b) {
    return a + b;
}

let resultado = somar(4, 5);

console.log(resultado)

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Impar';
    }
}

let resultado1 = verificarParOuImpar(4);
console.log(resultado1)
let resultado2 = verificarParOuImpar(5);
console.log(resultado2)

function saudar(nome) {
    return 'Olá, ' + nome + '! Seja bem-vindo(a)!';
}

let mensagem = saudar('Alice');
console.log(mensagem)
