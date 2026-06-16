class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidade = 0;
    };

    acelerar(velocidade) {
        this.velocidade += velocidade;
        console.log(`Você acelerou. Velocidade atual: ${this.velocidade} km/h`);
    };

    desacelerar(velocidade) {
        if (this.velocidade >= velocidade) {
            this.velocidade -= velocidade;
        } else {
            this.velocidade = 0;
        }
        console.log(`Você desacelerou. Velocidade atual: ${this.velocidade} km/h`);
    };

    frear() {
        this.velocidade = 0;
        console.log('Você freio. O carro parou.');
    }

    exibirDetalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    };
}

const carro1 = new Carro('Toyota', 'Corolla', 2020, 'Prata');
carro1.exibirDetalhes();
carro1.acelerar(10);
carro1.acelerar(20);
carro1.acelerar(60);
carro1.desacelerar(55);
carro1.frear();
carro1.acelerar(50);
