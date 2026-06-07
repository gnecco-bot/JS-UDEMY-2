function filtrarArray(array, funcaoFiltro) {
    let arrayFiltrado = [];

    for (let elemento of array) {
        if (funcaoFiltro(elemento)) {
            arrayFiltrado.push(elemento);
        }
    }
    return arrayFiltrado;
}

function ePar(numero) {
    return numero % 2 === 0;
};

function maiorQueDez(numero) {
    return numero > 10;
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 10, 29, 83, 54, 15];

let numerosPares = filtrarArray(numeros, ePar);
console.log(numerosPares)

let numerosMaiorQueDez = filtrarArray(numeros, maiorQueDez);
console.log(numerosMaiorQueDez)


function aplicarOperacao(numeros, operacao) {
    let resultado = [];
    for (let numero of numeros) {
        resultado.push(operacao(numero))
    };
    return resultado
};

function dobrar(valor) {
    return valor * 2
};

function incrementar(valor) {
    return valor + 1;
};

let array_numeros = [1, 2, 3, 4, 5];

let numerosDobrados = aplicarOperacao(array_numeros, dobrar);
console.log(numerosDobrados);

let numerosIncrementados = aplicarOperacao(array_numeros, incrementar);
console.log(numerosIncrementados)