document.addEventListener('DOMContentLoaded', () => {
    const listaNomes = document.getElementById('listaNomes');
    const listaDados = document.getElementById('listaDados');
    const moverParaDados = document.getElementById('moverParaDados');
    const moverParaNomes = document.getElementById('moverParaNomes');
    const moverTodosParaDados = document.getElementById('moverTodosParaDados');
    const moverTodosParaNomes = document.getElementById('moverTodosParaNomes');
    const excelFileUrl = 'funcionarios.xlsx';

    function moverItem(listaOrigem, listaDestino) {
        const selecionados = Array.from(listaOrigem.selectedOptions);
        selecionados.forEach(opcao => {
            listaDestino.appendChild(opcao); // Corrigido: appendChild
        });
        listaOrigem.selectedIndex = -1; // Corrigido: selectedIndex
    };

    function moverTodosItens(listaOrigem, listaDestino) {
        const todosItens = Array.from(listaOrigem.options);
        todosItens.forEach(opcao => {
            listaDestino.appendChild(opcao);
        });
        listaOrigem.selectedIndex = -1; // Corrigido: selectedIndex
    }

    moverParaDados.addEventListener('click', () => {
        moverItem(listaNomes, listaDados);
    })

    moverParaNomes.addEventListener('click', () => {
        moverItem(listaDados, listaNomes);
    })

    moverTodosParaDados.addEventListener('click', () => {
        moverTodosItens(listaNomes, listaDados); // Corrigido: listaDados como destino
    })

    moverTodosParaNomes.addEventListener('click', () => {
        moverTodosItens(listaDados, listaNomes);
    })

    function carregarDadosExcel(url) {
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                const primeiraSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(primeiraSheet, { header: 1 });
                populateListaNomes(jsonData);
            })
            .catch(error => console.error('Erro ao carregar o arquivo Excel.', error));
    }

    function populateListaNomes(data) {
        listaNomes.innerHTML = "";
        data.forEach((linha, indice) => {
            if (indice > 0 && linha[0]) {
                const opcao = document.createElement('option');
                opcao.text = linha[0];
                listaNomes.add(opcao);
            }
        })
    }

    carregarDadosExcel(excelFileUrl);
});