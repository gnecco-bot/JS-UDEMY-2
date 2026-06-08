function criarCarrinho() {
    const itens = [];
    return {
        adicionarItem: function (nome, preco, quantidade) {
            const item = itens.find((item => item.nome === nome));

            if (item) {
                item.quantidade += quantidade;
            } else {
                itens.push({ nome, preco, quantidade });
            }
        },

        removerItem: function (nome) {
            const index = itens.findIndex((item => item.nome === nome));
            if (index > -1) {
                itens.splice(index, 1);
            }
        },

        calcularTotal: function () {
            return itens.reduce((total, item) => total + (item.preco * item.quantidade), 0)
        },

        listarItens: function () {
            return itens.map(item => `${item.nome} (Preço: R$${item.preco}, Quantidade: ${item.quantidade})`).join(', ');
        },
    };
}

const produto = criarCarrinho();
produto.adicionarItem('Lápis', 10, 10)
produto.adicionarItem('Caderno', 5.40, 55)
console.log(produto.listarItens())

console.log(produto.calcularTotal())

produto.removerItem('Lápis')
console.log(produto.listarItens())