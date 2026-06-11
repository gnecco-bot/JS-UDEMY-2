const readline = require('readline')

let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let tarefas = ['Comprar pão', 'Estudar JavaScript', 'Ir ao médico'];
function exibirMenu() {
    console.log('\nEscolha uma opção:');
    console.log('1. Adiconar Tarefa');
    console.log('2. Alterar Tarefa');
    console.log('3. Excluir Tarefa');
    console.log('4. Exibir Tarefas');
    console.log('5. Sair');
}

function adicionarTarefa() {
    r1.question('Digite a nova tarefa: ', (novaTarefa) => {
        tarefas.push(novaTarefa);
        console.log('Tarefa adicionada com sucesso!');
        executarPrograma();
    });
}

function alterarTarefa() {
    r1.question('Digite o indice da tarefa para alterar (1, 2, 3,...): ', (indice) => {
        indiceAtual = parseInt(indice - 1);
        if (indiceAtual >= 0 && indiceAtual < tarefas.length) {
            r1.question('Digite a nova descrição da tarefa: ', (novaTarefa) => {
                console.log(`Tarefa "${tarefas[indiceAtual]}" anterior.`);
                tarefas[indiceAtual] = novaTarefa;
                console.log(`Tarefa atual "${tarefas[indiceAtual]}" alterada com sucesso.`);
                executarPrograma();
            });
        } else {
            console.log('Índice inválido!')
            executarPrograma();
        }
    })
}

function excluirTarefa() {
    r1.question('Digite o índice da tarefa para excluir (1, 2, 3, ...): ', (indice) => {
        indiceAtual = parseInt(indice - 1);
        if (indiceAtual >= 0 && indiceAtual < tarefas.length) {
            console.log(`Tarefa "${tarefas[indiceAtual]}" excluida com sucesso!`);
            tarefas.splice(indiceAtual, 1);
        } else {
            console.log('Índice inválido ou esgotado!');
        };
        executarPrograma();
    });
}

function exibirTarefas() {
    console.log('')
    console.log('Tarefas:');
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
                alterarTarefa();
                break;

            case '3':
                excluirTarefa();
                break;

            case '4':
                exibirTarefas();
                break;

            case '5':
                console.log('Saindo do programa...');
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