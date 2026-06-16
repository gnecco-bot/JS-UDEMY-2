class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };
    exibirDetalhes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
    }

    cumprimentar() {
        console.log(`Olá, eu sou o ${this.nome}`);
    }
}


const pessoa1 = new Pessoa('João', 30);
pessoa1.exibirDetalhes();
pessoa1.cumprimentar();

const pessoa2 = new Pessoa('Maria', 25);
pessoa2.exibirDetalhes();
pessoa2.cumprimentar();