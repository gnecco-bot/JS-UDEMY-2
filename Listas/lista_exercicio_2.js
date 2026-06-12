let lista = ['wicles', 'ana', 'anderson', 'jonas', 'jefersson', 'luisa', 'alex'];

function filtrarLetraA(nomes) {
    let nomesComA = nomes.filter(nome => {
        return nome.startsWith('a');
    });

    return nomesComA
};

let nomesExtraidos = filtrarLetraA(lista);
console.log('Nomes que começa com a letra A:', nomesExtraidos);