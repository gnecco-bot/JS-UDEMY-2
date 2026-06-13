let duplicadas = [1, 2, 5, 6, 6, 6, 8, 4, 3, 2, 2];

function removerDuplicadas(lista) {
    let listaSemRepetidos = lista.filter((item, indice) => {
        console.log('IndexOf', lista.indexOf(item), 'Item', item)
        console.log('indice', indice)
        return lista.indexOf(item) === indice;
    });

    return listaSemRepetidos
}

let listaLimpa = removerDuplicadas(duplicadas);
console.log(listaLimpa)