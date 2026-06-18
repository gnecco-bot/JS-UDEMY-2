class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };

    saudacao() {
        console.log(`Me chamo ${this.nome} e tenho ${this.idade} de idade.`);
    };
}

class Aluno extends Pessoa {
    constructor(nome, idade, numeroMatricula) {
        super(nome, idade);
        this.numeroMatricula = numeroMatricula;
    }
    saudacaoAluno() {
        console.log(`Aluno: ${this.nome}, Número de Matricula: ${this.numeroMatricula}`)
    };
}

class Professor extends Pessoa {
    constructor(nome, idade, numeroDepartamento) {
        super(nome, idade);
        this.numeroDepartamento = this.numeroDepartamento;
    }
    saudacaoProfessor() {
        console.log(`Professor: ${this.nome}, Número do Departamento: ${this.numeroDepartamento}`);
    };
}

const aluno1 = new Aluno('Ana', 10, 211923)
aluno1.saudacao();
aluno1.saudacaoAluno();

const professor1 = new Professor('Jonatas', 28, 5)
professor1.saudacao()
professor1.saudacaoProfessor();