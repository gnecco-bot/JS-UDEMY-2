const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let contatos = new Map();

function adicionarContato() {
    readline.question('Digite o nome do contato: ', nome => {
        readline.question('Digite o número: ', numero => {
            contatos.set(nome, numero);
            menu();
        });
    });
};

function removerContato() {
    readline.question('Digite o nome do contato para excluir: ', nome => {
        if (contatos.has(nome)) {
            console.log(`Excluindo contato: ${nome}`)
            contatos.delete(nome)
        } else {
            console.log('Contato não existe, tente um válido.');
        }
        menu();
    });
};

function exibirContatos() {
    if (contatos.size !== 0) {
        contatos.forEach((numero, nome) => {
            console.log(`Contato "${nome}" Número "${numero}".`)
        })
    } else {
        console.log('Sem contatos na lista.')
    }
    menu();
};

function menu() {
    console.log(`
        Escolha uma opção:
        1. Adicionar Contato
        2. Remover Contato
        3. Exibir Contatos
        4. Sair`);
    readline.question('', opcao => {
        opcao = parseInt(opcao);
        switch (opcao) {
            case 1:
                adicionarContato();
                break;
            case 2:
                removerContato();
                break;
            case 3:
                exibirContatos();
                break;
            case 4:
                console.log('Saindo do programa...')
                readline.close();
            default:
                console.log('Opção inválida! Tente novamente.');
                menu();
        };
    });
};

menu();