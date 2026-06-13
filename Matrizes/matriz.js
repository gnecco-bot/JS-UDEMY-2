let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let elemento = matriz[1][1];
console.log(elemento)

matriz[0][0] = 10;
console.log(matriz);
matriz.push([10, 11, 12]);
console.log(matriz);

matriz.forEach(linha => {
    linha.push(13);
});
console.log(matriz);

matriz.forEach(linha => {
    let linhaFormatada = linha.join(' ');
    console.log(linhaFormatada)
})

let matriz1 = [
    [1, 2],
    [3, 4],
]
let soma = 0;
for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1.length; j++) {
        soma += matriz1[i][j];
        console.log(`Letra I: ${i}`)
        console.log(`Letra J: ${j}`)
        console.log(soma);
    }
}
console.log(`A soma dos elementors da matriz é: ${soma}`);

let matriz2 = [
    [1, 2, 3],
    [4, 5, 6]
];
let transposta = [];
for (let i = 0; i < matriz2[0].length; i++) {
    transposta[i] = [];
};
for (let i = 0; i < matriz2.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
        transposta[j][i] = matriz2[i][j];
    }
}
console.log(`Matriz transposta:`)
transposta.forEach(linha => console.log(linha.join(' ')));

let matriz3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let max = -Infinity;

for (let i = 0; i < matriz3.length; i++) {
    for (let j = 0; j < matriz3[i].length; j++) {
        if (matriz[i][j] > max) {
            max = matriz3[i][j];
        }
    }
}

console.log(`Maior elemento da matriz: ${max}`)