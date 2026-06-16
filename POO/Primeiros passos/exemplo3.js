class Pessoa {
    constructor(nome) {
        this.nome = nome;
        this.acordado = false;
        this.comendo = false;
        this.dirigindo = false;
    };

    acordar() {
        if (!this.acordado) {
            console.log(`${this.nome} acordou`);
            this.acordado = true;
        } else {
            console.log(`${this.nome} já esta acordado`);
        }
    }

    dormir() {
        if (this.acordado && !this.comendo && !this.dirigindo) {
            console.log(`${this.nome} dormiu.`);
            this.acordado = false;
        } else if (!this.acordado) {
            console.log(`${this.nome} já está dormindo.`);
        } else {
            console.log(`${this.nome} não pode dormir enquanto está comendo ou dirigindo.`);
        }
    }

    comer() {
        if (!this.comendo && this.acordado && !this.dirigindo) {
            console.log(`${this.nome} começou a comer.`);
            this.comendo = true;
        } else if (this.comendo) {
            console.log(`${this.nome} já está comendo.`);
        } else {
            console.log(`${this.nome} não pode comer dormindo ou enquanto dirige.`);
        }
    }

    pararDeComer() {
        if (this.comendo) {
            console.log(`${this.nome} parou de comer.`);
            this.comendo = false;
        } else {
            console.log(`${this.nome} não estava comendo.`);
        }
    }

    dirigir() {
        if (!this.dirigindo && this.acordado && !this.comendo) {
            console.log(`${this.nome} começou a dirigir.`);
            this.dirigindo = true;
        } else if (this.dirigindo) {
            console.log(`${this.nome} já está dirigindo.`);
        } else {
            console.log(`${this.nome} não pode dirigir dormindo ou enquanto come.`);
        }
    }

    pararDeDirigir() {
        if (this.dirigindo) {
            console.log(`${this.nome} parou de dirigir.`);
            this.dirigindo = false;
        } else {
            console.log(`${this.nome} não estava dirigindo.`);
        }
    }
}

const pessoa = new Pessoa('João');
pessoa.acordar();
pessoa.comer();
pessoa.dirigir();
pessoa.pararDeComer();
pessoa.dirigir();
pessoa.dormir();
pessoa.pararDeDirigir();
pessoa.dormir();
