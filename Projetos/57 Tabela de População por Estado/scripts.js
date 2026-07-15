document.addEventListener('DOMContentLoaded', function () {
    fetch('Estados.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            var workbook = XLSX.read(data, { type: 'array' });
            var primeiraSheet = workbook.Sheets['Dados'];
            var dadosJSON = XLSX.utils.sheet_to_json(primeiraSheet);
            carregarDados(dadosJSON);
        })
        .catch(error => console.error("Error ao carregar os dados", error));
});

function carregarDados(dados) {
    var tabela = document.getElementById('tabelaPopulacao').getElementsByTagName('tbody')[0];
    var estados = {};
    dados.forEach(dado => {
        if (!estados[dado.Estado]) {
            estados[dado.Estado] = {
                totalHabitantes: 0,
                cidades: []
            }
        }
        var totalHabitantesStr = dado['Total de Habitantes'].toString().replace(/\./g, '').replace(/,/g, '');
        var totalHabitantes = parseInt(totalHabitantesStr, 10);
        if (!isNaN(totalHabitantes)) {
            estados[dado.Estado].totalHabitantes += totalHabitantes;
        }
        estados[dado.Estado].cidades.push(dado)
    });
    Object.keys(estados).forEach(estado => {
        var linhaEstado = document.createElement('tr');
        linhaEstado.innerHTML = `
            <td class="expand-button" onclick="toggleEstado(this)">
                ${estado} +
            </td>
            <td></td>
            <td>${estados[estado].totalHabitantes.toLocaleString('pt-BR')}</td>
        `
        tabela.appendChild(linhaEstado);
        estados[estado].cidades.forEach(cidade => {
            var totalHabitantesStr = cidade['Total de Habitantes'].toString().replace(/\./g, '').replace(/,/g, '');
            var totalHabitantes = parseInt(totalHabitantesStr, 10);
            var linhaCidade = document.createElement('tr');
            linhaCidade.classList.add('hidden');
            linhaCidade.innerHTML = `
                <td></td>
                <td>${cidade.Cidade}</td>
                <td>${!isNaN(totalHabitantes) ? totalHabitantes.toLocaleString('pt-BR') : 'N/A'}</td>
            `
            tabela.appendChild(linhaCidade);
        });
    })
};

function toggleEstado(element) {
    var linhas = element.parentElement.nextElementSibling;
    while (linhas && !linhas.classList.contains("expand-button") && linhas.firstElementChild.textContent === "") {
        linhas.classList.toggle("hidden");
        linhas = linhas.nextElementSibling;
    }
    element.innerHTML = element.innerHTML.includes("+") ? element.innerHTML.replace("+", "-") : element.innerHTML.replace("+");
} 