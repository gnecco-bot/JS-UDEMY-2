const readline = require('readline')

r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const objAluno = {}

function informacoesAluno() {
    r1.question('Qual o nome do aluno? ', nome1 => {
        objAluno.nome = nome1;
        r1.question('Qual a idade do aluno? ', idade => {
            objAluno.idade = idade
            r1.question('Qual é o curso do aluno? ', curso => {
                objAluno.curso = curso
                r1.question('Qual é a nota do aluno em Matemática? ', nota => {
                    nota = parseInt(nota)
                    objAluno.matematicaNota = nota
                    r1.question('Qual é a nota do aluno em Física? ', nota => {
                        nota = parseInt(nota)
                        objAluno.fisicaNota = nota
                        r1.question('Qual é a nota do aluno em Química? ', nota => {
                            nota = parseInt(nota)
                            objAluno.quimicaNota = nota
                            exibirInfoAluno();
                        })
                    })
                })
            })
        });
    });
}

function calcularMedia() {
    media = parseFloat((objAluno.matematicaNota + objAluno.fisicaNota + objAluno.quimicaNota) / 3)
    return media.toFixed(2)
};

function exibirInfoAluno() {
    calcularMedia();
    console.log(`Nome do aluno: ${objAluno.nome}, Idade: ${objAluno.idade}, Curso: ${objAluno.curso}, Media das notas: ${calcularMedia()}`)
    r1.close();
}

informacoesAluno();