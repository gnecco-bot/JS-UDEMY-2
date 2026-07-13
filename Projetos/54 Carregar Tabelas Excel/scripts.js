function filtrarTabela() {
    var filtrarNome = document.getElementById('filtroNome').value.toLowerCase();
    var filtrarDepartamento = document.getElementById('filtroDepartamento').value.toLowerCase();
    var filtrarCargo = document.getElementById('filtroCargo').value.toLowerCase();
    var filtrarSalario = document.getElementById('filtroSalario').value.toLowerCase();
    var filtrarTempo = document.getElementById('filtroTempo').value.toLowerCase();
    var linhas = document.getElementById('corpoTabela').rows;

    for (let i = 0; i < linhas.length; i++) {
        var nome = linhas[i].cells[0].textContent.toLowerCase();
        var departamento = linhas[i].cells[1].textContent.toLowerCase();
        var cargo = linhas[i].cells[2].textContent.toLowerCase();
        var salario = linhas[i].cells[3].textContent.toLowerCase();
        var tempo = linhas[i].cells[4].textContent.toLowerCase();

        linhas[i].style.display =
            (nome.includes(filtrarNome) || filtrarNome === "") &&
                (departamento.includes(filtrarDepartamento) || filtrarDepartamento === "") &&
                (cargo.includes(filtrarCargo) || filtrarCargo === "") &&
                (salario.includes(filtrarSalario) || filtrarSalario === "") &&
                (tempo.includes(filtrarTempo) || filtrarTempo === "") ? "" : "none";
    }
}

function formatarSalario(salario) {
    return parseFloat(salario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function carregarDados(dados) {
    var corpoTabela = document.getElementById('corpoTabela');
    dados.forEach(funcionario => {
        var linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${funcionario.Nome}</td>
            <td>${funcionario.Departamento}</td>
            <td>${funcionario.Cargo}</td>
            <td>${formatarSalario(funcionario.Salário)}</td>
            <td>${funcionario["Tempo de Empresa (anos)"]}</td>
        `;

        corpoTabela.appendChild(linha);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    fetch('funcionarios.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            var workbook = XLSX.read(data, { type: 'array' });
            var primeiraSheet = workbook.Sheets[workbook.SheetNames[0]];
            var dadosJSON = XLSX.utils.sheet_to_json(primeiraSheet);
            carregarDados(dadosJSON);
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});

function exportarParaExcel() {
    var tabela = document.getElementById('tabelaFuncionarios');
    var workbook = XLSX.utils.table_to_book(tabela);
    XLSX.writeFile(workbook, 'funcionarios.xlsx');
}