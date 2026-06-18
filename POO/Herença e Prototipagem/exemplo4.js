class AlunoEcolaPai {
    constructor(codigo, nome, sexo, idade) {
        this.codigo = codigo;
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }

    imprimirNaTela() {
        console.log(`Código: ${this.codigo}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Idade: ${this.idade}`);
        console.log(``);
    }
}

class AlunoEscolaFilho extends AlunoEcolaPai {
    constructor() {
        super(1, "Alice", "Feminino", '19');
    }
}

class AlunoEscolaNeto extends AlunoEcolaPai {
    constructor() {
        super(2, "Allan", "Masculino", 28);
    }
}

const dadosEscolaFilho = new AlunoEscolaFilho();
dadosEscolaFilho.imprimirNaTela();

const dadosEscolaNeto = new AlunoEscolaNeto();
dadosEscolaNeto.imprimirNaTela();
