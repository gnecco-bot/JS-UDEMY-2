const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const alunos = [];
const numeroAlunos = 3;

let alunoIndex = 0;

function perguntarNome() {
    if (alunoIndex < numeroAlunos) {
        r1.question(`Digite o nome do aluno ${alunoIndex + 1}: `, function (nome) {
            const notas = [];
            alunos.push({ nome: nome, notas: notas });
            perguntarNotas(notas);
        });
    } else {
        imprimirResultados();
        r1.close()
    }
}

function perguntarNotas(notas) {
    if (notas.length < 3) {
        r1.question(`Digite a nota ${notas.length + 1}: `, function (nota) {
            notas.push(parseFloat(nota));
            perguntarNotas(notas);
        });
    } else {
        alunoIndex++;
        perguntarNome();
    }
}

function imprimirResultados() {
    console.log("\nResultados:")
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i];
        let somaNotas = 0;
        for (let j = 0; j < aluno.notas.length; j++) {
            somaNotas += aluno.notas[j];
        }
        let media = somaNotas / aluno.notas.length;

        let situacao = media >= 7 ? 'Aprovado' : 'Reprovado';

        console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}, Situação: ${situacao}`);
    }
}

perguntarNome();