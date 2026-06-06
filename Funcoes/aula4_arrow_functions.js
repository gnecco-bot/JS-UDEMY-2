const multiplicar = (num1, num2) => num1 * num2;
let resultado = multiplicar(4, 5);
console.log(resultado);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const impares = numeros.filter(numero => numero % 2 !== 0);
console.log(impares);

const frutas = ['Maçã', 'Banana', 'Cereja', 'Damasco'];
const frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMaiusculas);