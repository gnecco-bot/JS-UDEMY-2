const array = [1, 6, 344, 7, 147, 4, 765, 4, 32, 7, 4, 784, 3, 999, 63];
let n = 0;
function maxArray(array, indice = 0, maxAtual = -Infinity) {
    if (indice === array.length) return maxAtual;
    maxAtual = array[indice] > maxAtual ? array[indice] : maxAtual;
    return maxArray(array, indice + 1, maxAtual);
};

console.log(maxArray(array));