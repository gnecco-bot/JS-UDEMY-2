const pessoas = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 33 },
    { nome: "Jonas", idade: 65 },
];

const calcularMediaIdades = (pessoas) => {
    const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    return somaIdades / pessoas.length;
}

const mediaIdade = calcularMediaIdades(pessoas)

console.log(`A média das idades é: ${mediaIdade.toFixed(2)}.`)