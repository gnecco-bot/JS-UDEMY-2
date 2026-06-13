let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

/* ======================================== */

let elemento = matriz[1][1];
console.log(elemento)

matriz[0][0] = 10;
console.log(matriz);
matriz.push([10, 11, 12]);
console.log(matriz);

/* ======================================== */

matriz.forEach(linha => {
    linha.push(13);
});
console.log(matriz);

matriz.forEach(linha => {
    let linhaFormatada = linha.join(' ');
    console.log(linhaFormatada)
})

/* ======================================== */

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

/* ======================================== */

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

/* ======================================== */

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

/* ======================================== */

let matriz5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let rotacionada = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
for (let i = 0; i < matriz5.length; i++) {
    for (let j = 0; j < matriz5.length; j++) {
        rotacionada[j][matriz5.length - 1 - i] = matriz5[i][j];
    }
}
console.log(`Matriz rotacionada 90 graus no sentido horário: `)
rotacionada.forEach(linha => {
    console.log(linha.join(' '));
});

/* ======================================== */

let matriz6 = new Array(3);
for (let i = 0; i < matriz6.length; i++) {
    matriz6[i] = new Array(3);
    for (let j = 0; j < matriz6[i].length; j++) {
        matriz6[i][j] = 0;
    }
}
console.log('Matriz 3 x 3 preenchida com zeros:');
matriz6.forEach(linha => {
    console.log(linha.join(' '));

})

/* ======================================== */

let matriz7 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let diagonalPrincipal = [];
for (let i = 0; i < matriz7.length; i++) {
    diagonalPrincipal.push(matriz7[i][i]);
}
console.log(`Diagnoal princpal: ${diagonalPrincipal}`)

/* ======================================== */

let C = [
    [1, 2],
    [3, 4]
];
let D = [
    [5, 6],
    [7, 8]
];
let somaMatrizes = [
    [0, 0],
    [0, 0]
];
for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < C.length; j++) {
        somaMatrizes[i][j] = C[i][j] + D[i][j];
    }
}
console.log('Soma das matrizes:')
somaMatrizes.forEach(linha => {
    console.log(linha.join(' '));
});

/* ======================================== */

let matrizBidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrizBidimensional[1][2])
matrizBidimensional[2][0] = 10;
console.log('Matriz Bidimensional modificada:');
matrizBidimensional.forEach(linha => {
    console.log(linha.join(' '));
})

/* ======================================== */

let matrizTridimensional = [
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ]
];

console.log(matrizTridimensional[1][2][2]);
matrizTridimensional[0][0][2] = 20;
console.log('Matriz Tridimensional modificada:');
matrizTridimensional.forEach(bloco => {
    console.log('Bloco:');
    bloco.forEach(linha => {
        console.log(linha.join(' '));
    })
})
