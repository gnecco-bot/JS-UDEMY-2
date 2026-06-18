class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log(`${this.nome} faz um som.`);
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} late.`);
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} mia.`);
    }
}

const cachorro = new Cachorro('Rex');
const gato = new Gato('Mingau');

cachorro.emitirSom();
gato.emitirSom();
