class Aluno {
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.notas = [];
    }

    adicionarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
        } else {
            console.log('Número digitado acima do permitido (apenas de 0 a 10).');
        };
    };

    calcularMedia() {
        if (this.notas.length > 0) {
            let soma = this.notas.reduce((acc, cur) => acc + cur, 0);
            console.log(`A media do aluno ${this.nome} é: ${soma / this.notas.length}`)
        }
    };

    aprovado() {
        let soma = this.notas.reduce((acc, cur) => acc + cur, 0);
        let situacao = soma / this.notas.length;
        if (situacao >= 7) {
            console.log(`Parabéns, o aluno ${this.nome} foi Aprovado!`)
        } else {
            console.log(`O aluno ${this.nome} foi Reprovado.`)
        };
    };

};

const aluno1 = new Aluno('Anderson', 15, 'Engenharia');
aluno1.adicionarNota(10);
aluno1.adicionarNota(10);
aluno1.adicionarNota(5);
aluno1.adicionarNota(7);
aluno1.calcularMedia();
aluno1.aprovado();

const aluno2 = new Aluno('Jefferson', 17, 'Quimica');
aluno2.adicionarNota(5);
aluno2.adicionarNota(7);
aluno2.adicionarNota(6);
aluno2.adicionarNota(6);
aluno2.calcularMedia();
aluno2.aprovado();
