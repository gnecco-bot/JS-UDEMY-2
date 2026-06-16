const readline = require('readline');
r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let registroProdutos = [];

function adicionarProduto() {
    r1.question('Digite o nome do produto: ', nome => {
        r1.question('Digite o preço do produto: ', preco => {
            r1.question('Digite a quantidade do produto: ', quantidade => {
                preco = parseInt(preco);
                quantidade = parseInt(quantidade);
                let produto = { nome, preco, quantidade };
                registroProdutos.push(produto);
                console.log(`Produto "${nome}" adicionando ao registro`);
                opcoes()
            })
        })
    })
}

function atualizarPreco() {
    r1.question('Digite o nome do produto que quer atualizar o preço: ', nome => {
        let produto = registroProdutos.find(item => item.nome === nome);
        if (produto) {
            r1.question('Digite o novo preço do produto: ', (novoPreco) => {
                novoPreco = parseFloat(novoPreco);
                produto.preco = novoPreco;
                console.log(`Preço do produto "${nome}" atualizado para R$ ${novoPreco.toFixed(2)}.`);
                opcoes();
            })
        } else {
            console.log('Produto não encontrado.');
            opcoes();
        }
    })
}

function atualizarQuantidade() {
    r1.question('Digite o nome do produto que quer atualizar a quantidade em estoque: ', nome => {
        let produto = registroProdutos.find(item => item.nome === nome);
        if (produto) {
            r1.question('Digite a nova quantidade em estoque: ', (novaQuantidade) => {
                novaQuantidade = parseFloat(novaQuantidade);
                produto.quantidade = novaQuantidade;
                console.log(`Quantidade do estoque do produto "${nome}" atualizado para ${novaQuantidade.toFixed(2)}.`);
                opcoes();
            })
        } else {
            console.log('Produto não encontrado.');
            opcoes();
        }
    })
}

function removerProduto() {
    r1.question('Digite o nome do produto que você quer remover: ', nome => {
        let registroProdutosComparacao = [...registroProdutos];
        registroProdutos = registroProdutos.filter(item => item.nome !== nome);
        if (JSON.stringify(registroProdutosComparacao) === JSON.stringify(registroProdutos)) {
            console.log('Produto não existe')
        } else {
            console.log(`Produto "${nome}" removido do registro`);
        }
        opcoes(); 4
    })
}

function exibirProdutos() {
    if (registroProdutos.length === 0) {
        console.log('Ainda não há produtos');
    } else {
        for (i of registroProdutos) {
            console.log(`Produto: ${i.nome}, Preço: ${i.preco}, Quantidade em estoque: ${i.quantidade}`);
        }
    }
    opcoes()
}

function opcoes() {
    console.log(`Escolha uma opção:
        1. Adicionar Produto
        2. Atualizer Preço
        3. Atualizar Quantidade
        4. Remover Produto
        5. Exibir Produtos
        6. Sair`);
    r1.question('', opcao => {
        opcao = parseInt(opcao)
        switch (opcao) {
            case 1:
                adicionarProduto();
                break;
            case 2:
                atualizarPreco();
                break;
            case 3:
                atualizarQuantidade();
                break;
            case 4:
                removerProduto();
                break;
            case 5:
                exibirProdutos();
                break;
            case 6:
                console.log('Fechando o programa...')
                r1.close();
                break;
        }
    })
}

opcoes();