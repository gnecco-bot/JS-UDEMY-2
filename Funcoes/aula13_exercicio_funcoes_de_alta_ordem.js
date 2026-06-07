const produtos = [
    { nome: "caderno", categoria: "Papelaria", preco: 10 },
    { nome: "Borracha", categoria: "Papelaria", preco: 5 },
    { nome: "Teclado", categoria: "Eletrònicos", preco: 80 },
    { nome: "Mouse", categoria: "Eletrònic", preco: 50 },
];

function aumentaPrecos(produtos, apartir, porcentagem, operacao) {
    let produtosAtualizados = [];
    for (elemento of produtos) {
        if (elemento.preco >= apartir) {
            elemento.preco = operacao(elemento.preco, porcentagem)
        }
    }
    return produtos;
}

function porcentagem(precoAtual, porcentagem) {
    porcento = (precoAtual * porcentagem) / 100;
    return precoAtual + porcento
}

const atualizado1 = aumentaPrecos(produtos, 20, -50, porcentagem)
console.log(atualizado1);