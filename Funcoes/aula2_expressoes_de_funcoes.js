const quadrado = function (numero) {
    return numero * numero;
};

let resultado = quadrado(4);
console.log(resultado)

const concatenarStrings = function (string1, string2) {
    return string1 + ' ' + string2;
};

let mensagemCompleta = concatenarStrings('Olá', 'Mundo');
console.log(mensagemCompleta);

const verificarSinal = function (numero) {
    if (numero > 0) {
        return 'Positivo';
    } else if (numero < 0) {
        return 'Negativo';
    } else {
        return 'Zero';
    }
}

let resultado1 = verificarSinal(10);
let resultado2 = verificarSinal(-5);
let resultado3 = verificarSinal(0);

console.log(`10 é ${resultado1}.`)
console.log(`-5 é ${resultado2}.`)
console.log(`0 é ${resultado3}.`)