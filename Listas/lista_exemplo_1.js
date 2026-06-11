let lista = ['maça', 'banana', 'cereja'];

lista.push('laranja');
console.log('Lista após  adicionar laranja:', lista)

lista[1] = 'uva';
console.log('Lista após mudar banana para uva:', lista);

lista.splice(2, 1);
console.log('Lista após remover cereja:', lista);
console.log('Tamanho da lista:', lista.length);

const temMaca = lista.includes('maça');
console.log('A lista contém maça:', temMaca);

let numeros = [1, 2, 4, 5];
numeros.splice(2, 0, 3);
console.log('Números com "3" adicionado:', numeros);

numeros.splice(1, 1);
console.log('Números com "2" removido:', numeros);

let frutas = ['maça', 'banana', 'cereja'];
frutas.forEach(function (item, index) {
    console.log(index, item);
})

let numeros_2 = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros_2.filter(n => n % 2 === 0);
console.log('Números pares:', numerosPares);

let = numeros_3 = [1, 2, 3, 4, 5];
let quadrados = numeros_3.map(n => n * n);
console.log('Quadrados:', quadrados);

let numeros_4 = [1, 2, 3, 4, 5];
let soma = numeros_4.reduce((acc, cur) => acc + cur, 0);
console.log('Soma:', soma);

let numeros_5 = [5, 19, 28, 11, 44];
let primeiroMaiorDez = numeros_5.find(n => n > 10);
console.log('Primeiro número maior que 10:', primeiroMaiorDez);

let frutas_2 = ['banana', 'maça', 'cereja'];
frutas_2.sort();
console.log('Frutas ordernadas:', frutas_2);

let frutas_3 = ['banana', 'maça', 'cereja'];
frutas_3.reverse();
console.log('Frutas em ordem reversa:', frutas_3);

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let arrayConcatenado = array1.concat(array2);
console.log('Array concatenado:', arrayConcatenado);

let idades = [32, 45, 18, 76];
let todosAdultos = idades.every(idade => idade >= 18);
console.log('Todos são adultos:', todosAdultos)

let idade_2 = [16, 21, 40, 14, 18];
let algumAdulto = idade_2.some(idade_2 => idade_2 >= 18);
console.log('Algum é adulto:', algumAdulto);

let frutas_4 = ['banana', 'maça', 'laranja', 'uva', 'cereja'];
let algumasFrutas = frutas_4.slice(1, 4);
console.log('Algumas frutas:', algumasFrutas);

let frase = 'Olá, mundo!';
let palavras = frase.split(' ');
console.log('Palavras:', palavras);

let palavras_2 = ['Olá', 'mundo!'];
let frase_2 = palavras_2.join(' ');
console.log('Frase:', frase_2);