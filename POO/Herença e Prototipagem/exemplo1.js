class Pai {
    constructor(nome) {
        this.nomePai = nome;
    };
}

class Mae {
    constructor(nome) {
        this.nomeMae = nome;
    }
}

class Filho {
    constructor(nome, pai, mae, escola) {
        this.nome = nome;
        this.pai = pai.nomePai;
        this.mae = mae.nomeMae;
        this.escola = escola;
    }
}

const pai = new Pai('Roberto');
const mae = new Mae('Adriana');
const filho = new Filho('Ana', pai, mae, "Escola ABC");

console.log(`Filho: ${filho.nome}, Pai: ${filho.pai}, Mãe: ${filho.mae}, Escola: ${filho.escola}`);