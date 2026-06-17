class Funcionario {
    #nome;
    #idade;
    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
        this.publica = 'Valor Público';
    };

    #calcularSalario(horasTrabalhadas, taxaHora) {
        return horasTrabalhadas * taxaHora;
    };

    exibirSalario(horasTrabalhadas, taxaHora) {
        const salario = this.#calcularSalario(horasTrabalhadas, taxaHora);
        console.log(`O salario de ${this.#nome} é $${salario} por semana. Em um mês é de $${salario * 4}`);
    };

    getNome() {
        return this.#nome;
    }

    getIdade() {
        return this.#idade;
    }
};

const funcionario1 = new Funcionario('João', 30);
const funcionario2 = new Funcionario('Carlos', 51);
const funcionario3 = new Funcionario('Maria', 24);
funcionario1.exibirSalario(40, 20);
funcionario2.exibirSalario(35, 15);
funcionario3.exibirSalario(48, 27);
console.log(`O nome do funcionário 1 ${funcionario1.getNome()} e a idade ${funcionario1.getIdade()}`)
console.log(`${funcionario1.publica}`)