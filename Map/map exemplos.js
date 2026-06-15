let filmesAvaliacoes = new Map();

function adicionarFilme(nome, avaliacao) {
    filmesAvaliacoes.set(nome, avaliacao);
    console.log(`Filme "${nome}" adicionado com avaliação ${avaliacao}`);
}

function excluirFilme(nome) {
    if (filmesAvaliacoes.has(nome)) {
        console.log(`Filme "${nome}" excluído.`);
    } else {
        console.log(`Filme "${nome}" não foi encontrado.`)
    }
}

function exibirListaFilmes() {
    console.log('Lista de Filmes e Avaliações:');
    filmesAvaliacoes.forEach((avaliacao, nome) => {
        console.log(`${nome}: ${avaliacao}`);
    });
}

function verificarFilme(nome) {
    if (filmesAvaliacoes.has(nome)) {
        console.log(`O filme "${nome}" está na lista.`);
    } else {
        console.log(`O filme "${nome}" não está na lista.`);
    }
}

adicionarFilme('Matrix', 8.8);
adicionarFilme('Senhor dos anéis', 7.8);
adicionarFilme('Senhor dos anéis', 7.6);

exibirListaFilmes();

verificarFilme('Matrix');
verificarFilme('Matriz');

excluirFilme('Matrix');
exibirListaFilmes();