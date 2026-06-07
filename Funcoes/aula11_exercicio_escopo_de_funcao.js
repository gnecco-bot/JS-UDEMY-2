let estoque = {
    canetas: 10,
    lapis: 5,
    borrachas: 7,
};

function ajustarEstoque(nomeDoProduto, quantidade) {
    if (estoque[nomeDoProduto] !== undefined) {
        estoque[nomeDoProduto] += quantidade;
        return estoque[nomeDoProduto];
    } else {
        console.log('Produto não encontrado no estoque.')
        return null;
    }
}

console.log(`Estoque de canetas antes do ajuste: ${estoque.canetas}`);
let estoqueCanetasAtualizada = ajustarEstoque('canetas', 5);
console.log(estoqueCanetasAtualizada)
console.log(`Estoque de canetas após o ajuste: ${estoque.canetas}`);