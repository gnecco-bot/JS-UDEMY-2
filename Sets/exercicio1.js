const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let filmesFavoritos = new Set()

function adicionarFilmeFavorito() {
    readline.question("Qual é o  nome do seu Filme FAVORITO? ", nome => {
        if (filmesFavoritos.has(nome)) {
            console.log('Filme já existente na lista de favoritos.')
        } else if (nome.length === 0) {
            console.log(`"${nome}"`)
            console.log('Digite um nome valido')
        } else {
            filmesFavoritos.add(nome);
            console.log(`Adicionado Filme "${nome}" com sucesso`);
        }
        menu();
    })
}

function removerFilmeFavorito() {
    readline.question("Qual nome do Filme que deseja excluir dos favoritos? ", nome => {
        if (filmesFavoritos.has(nome)) {
            filmesFavoritos.delete(nome);
            console.log(`Filme "${nome}" excluído com sucesso`);
        } else {
            console.log(`Filme mencionado "${nome}" não existe na lista de filmes favoritos`);
        }
        menu();
    })
}

function listarFilmes() {
    if (filmesFavoritos.size === 0) {
        console.log('Não existe filmes na lista de favoritos')
    } else {
        console.log('Filmes Favoritos:')
        filmesFavoritos.forEach(nome => {
            console.log(nome);
        })
    }
    menu();
}

function menu() {
    console.log('\nDigite alguma das opções abaixo:');
    console.log('1. Filme FAVORITO');
    console.log('2. Remover Filme FAVORITO');
    console.log('3. Listar Filmes FAVORITOS');
    console.log('4. Sair');
    readline.question('Opção: ', opcao => {
        opcao = parseInt(opcao);
        switch (opcao) {
            case 1:
                adicionarFilmeFavorito();
                break;
            case 2:
                removerFilmeFavorito();
                break;
            case 3:
                listarFilmes();
                break;
            case 4:
                console.log('Saindo do programa...');
                readline.close();
                break;
            default:
                console.log('Algo foi digitado errado, tente novamente');
                menu();
        };
    })
}

menu();