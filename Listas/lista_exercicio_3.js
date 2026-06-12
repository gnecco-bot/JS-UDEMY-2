const readline = require('readline')

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let tarefas = [];
function exibirMenu() {
    console.log('\nEscolha uma opção:');
    console.log('1. Adiconar item');
    console.log('2. Remover item do carrinho');
    console.log('3. Exibir compras');
    console.log('5. Sair');
}

function adicionarTarefa() {
    r1.question('Digite o novo item: ', (novaTarefa) => {
        tarefas.push(novaTarefa);
        console.log('Item adicionado com sucesso!');
        executarPrograma();
    });
}

function excluirItemCarrinho() {
    r1.question('Digite o índice do item para excluir (1, 2, 3, ...): ', (indice) => {
        indiceAtual = parseInt(indice - 1);
        if (indiceAtual >= 0 && indiceAtual < tarefas.length) {
            console.log(`Item "${tarefas[indiceAtual]}" excluido com sucesso!`);
            tarefas.splice(indiceAtual, 1);
        } else {
            console.log('Índice inválido ou esgotado!');
        };
        executarPrograma();
    });
}

function exibirCompras() {
    console.log('')
    console.log('Item do carrinho:');
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}: ${tarefa}`);
    });
    executarPrograma();
}

function executarPrograma() {
    exibirMenu()
    r1.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarTarefa();
                break;

            case '2':
                excluirItemCarrinho();
                break;

            case '3':
                exibirCompras();
                break;

            case '4':
                console.log('Saindo do mercado...');
                r1.close();
                break;

            default:
                console.log('Opção inválida! Tente novamente.');
                executarPrograma();
                break;
        }
    });
}

executarPrograma()