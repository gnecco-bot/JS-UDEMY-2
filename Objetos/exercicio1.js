const { parse } = require('path/win32');
const readline = require('readline')

r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// const objAluno = {}

// function informacoesAluno() {
//     r1.question('Qual o nome do aluno? ', nome1 => {
//         objAluno.nome = nome1;
//         r1.question('Qual a idade do aluno? ', idade => {
//             objAluno.idade = idade
//             r1.question('Qual é o curso do aluno? ', curso => {
//                 objAluno.curso = curso
//                 r1.question('Qual é a nota do aluno em Matemática? ', nota => {
//                     nota = parseInt(nota)
//                     objAluno.matematicaNota = nota
//                     r1.question('Qual é a nota do aluno em Física? ', nota => {
//                         nota = parseInt(nota)
//                         objAluno.fisicaNota = nota
//                         r1.question('Qual é a nota do aluno em Química? ', nota => {
//                             nota = parseInt(nota)
//                             objAluno.quimicaNota = nota
//                             exibirInfoAluno();
//                         })
//                     })
//                 })
//             })
//         });
//     });
// }

// function calcularMedia() {
//     media = parseFloat((objAluno.matematicaNota + objAluno.fisicaNota + objAluno.quimicaNota) / 3)
//     return media.toFixed(2)
// };

// function exibirInfoAluno() {
//     calcularMedia();
//     console.log(`Nome do aluno: ${objAluno.nome}, Idade: ${objAluno.idade}, Curso: ${objAluno.curso}, Media das notas: ${calcularMedia()}`)
//     r1.close();
// }

// informacoesAluno();

let aluno = {};
function solicitarInformacao(pergunta) {
    return new Promise((resolve, reject) => {
        r1.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

(async () => {
    aluno.nome = await solicitarInformacao("Digite o nome do aluno: ");
    aluno.idade = parseInt(await solicitarInformacao("Digite a idade do aluno: "));
    aluno.curso = await solicitarInformacao("Digite o curso do aluno: ");
    aluno.notas = {};

    aluno.notas.matematica = parseFloat(await solicitarInformacao("Digite a nota de Matemática: "));
    aluno.notas.fisica = parseFloat(await solicitarInformacao("Digite a nota de Física: "));
    aluno.notas.quimica = parseFloat(await solicitarInformacao("Digite a nota de Química: "));

    function calcularMedia(aluno) {
        let totalNotas = 0;
        let numNotas = 0;
        for (let materia in aluno.notas) {
            totalNotas += aluno.notas[materia];
            numNotas++;
        }
        let media = totalNotas / numNotas;
        return media;
    }

    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Curso: ${aluno.curso}`);
    console.log(`Notas: `);
    for (let materia in aluno.notas) {
        console.log(`${materia}: ${aluno.notas[materia]}`);
    }
    console.log(`Média: ${calcularMedia(aluno).toFixed(2)}`);
    r1.close();
})();

