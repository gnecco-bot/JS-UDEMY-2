let notasDosAlunos = new Map();

notasDosAlunos.set("João", 8.5);
notasDosAlunos.set("Maria", 9.0);
notasDosAlunos.set("Pedro", 6.0);
notasDosAlunos.set("Ana", 6.5);

console.log('Notas dos alunos:');
notasDosAlunos.forEach((nota, aluno) => {
    console.log(`${aluno}: ${nota}`);
});

notasDosAlunos.set('Ana', 8);
console.log('\nNova nota de Ana:', notasDosAlunos.get('Ana'));

let aluno = 'Pedro';

if (notasDosAlunos.has(aluno)) {
    console.log(`\n${aluno} está no mapa de notas.`);
} else {
    console.log(`\n${aluno} não está no mapa de notas.`);
}

notasDosAlunos.delete('João');
console.log(`\nNotas dos alunos após remoção de João:`);
notasDosAlunos.forEach((nota, aluno) => {
    console.log(`${aluno}: ${nota}`);
});

console.log(`\nNúmero de alunos:`, notasDosAlunos.size);
notasDosAlunos.clear();
console.log(`\nO mapa está vazio?`, notasDosAlunos.size === 0);