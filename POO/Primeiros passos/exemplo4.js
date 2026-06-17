const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class GerenciadorUsuario {
    constructor() {
        this.usuarios = [];
    }
    adicionarUsuario(nome, email) {
        const novoUsuario = new Usuario(nome, email);
        this.usuarios.push(novoUsuario);
        console.log('Usuário adicionado com sucesso!');
    }

    exibirUsuarios() {
        console.log('=== Lista de Usuários ===');
        this.usuarios.forEach((usuario, index) => {
            console.log(`Usuário ${index + 1}: ${usuario.nome} (${usuario.email})`);
        });
        console.log(this.usuarios);
        console.log('=========================')
    }

    alterarEmail(indice, novoEmail) {
        if (indice >= 0 && indice < this.usuarios.length) {
            this.usuarios[indice].email = novoEmail;
            console.log('Email do usuário alterado com sucesso!');
        } else {
            console.log('Índice inválido');
        }
    }

    deletarUsuario(indice) {
        if (indice >= 0 && indice < this.usuarios.length) {
            this.usuarios.splice(indice, 1);
            console.log('Usuário deletado com sucesso!');
        } else {
            console.log('Índice inválido');
        }
    }
}

function exibirMenu() {
    console.log('=== Menu ===');
    console.log('1. Adicionar Usuário');
    console.log('2. Exibir Usuários');
    console.log('3. Alterar Email do Usuário');
    console.log('4. Deletar Usuário');
    console.log('5. Sair')
}

const gerenciador = new GerenciadorUsuario();

function processarOpcao(opcao) {
    switch (opcao) {
        case '1':
            rl.question('Digite o nome do usuário: ', (nome) => {
                rl.question('DIgite o email do usuário: ', (email) => {
                    gerenciador.adicionarUsuario(nome, email);
                    exibirMenu();
                });
            });
            break;
        case '2':
            gerenciador.exibirUsuarios();
            exibirMenu();
            break;
        case '3':
            rl.question('Digite a índice do usuário: ', (indice) => {
                rl.question('Digite o email do usuário: ', (novoEmail) => {
                    gerenciador.alterarEmail(parseInt(indice) - 1, novoEmail);
                    exibirMenu();
                })
            })
            break;
        case '4':
            rl.question('Digite o índice do usuário a ser deletado: ', (indice) => {
                gerenciador.deletarUsuario(parseInt(indice) - 1);
                exibirMenu();
            })
            break;
        case '5':
            console.log('Saindo do programa...');
            rl.close();
            break;
        default:
            console.log('Opção inválida.');
            exibirMenu();
    }
}

exibirMenu();

rl.on('line', (input) => {
    processarOpcao(input.trim());
});
