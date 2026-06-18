class Pai {
    imprimirDadosCasaPai() {
        console.log('----- Dados casa Pai -----');
        console.log("Código: 1");
        console.log("Proprietário: Matheus Alves");
        console.log("Estado: Santa Catarina");
        console.log("Cidade: Lages");
        console.log("Valor: R$ 500.000,00");
        console.log("\n");
    }
}

class Mae {
    imprimirDadosCasaMae() {
        console.log('----- Dados casa Mae -----');
        console.log("Código: 2");
        console.log("Proprietário: Alice Alves");
        console.log("Estado: Santa Catarina");
        console.log("Cidade: Fçproanópolis");
        console.log("Valor: R$ 5.500.000,00");
        console.log("\n");
    }
}

class Filho {
    constructor() {
        this.pai = new Pai();
        this.mae = new Mae();
    }

    imprimirDadosCasaPai() {
        this.pai.imprimirDadosCasaPai();
    }
    imprimirDadosCasaMae() {
        this.mae.imprimirDadosCasaMae();
    }
}

const dadosFilho = new Filho();
dadosFilho.imprimirDadosCasaPai();
dadosFilho.imprimirDadosCasaMae();