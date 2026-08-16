document.addEventListener('DOMContentLoaded', function () {
    const corpoTabela = document.querySelector('#tabela-dados tbody');
    function carregarDados() {
        fetch('Estados.xlsx')
            .then(response => response.arrayBuffer())
            .then(data => {
                const planilha = XLSX.read(data, { type: 'array' });
                const aba = planilha.Sheets['Dados'];
                const dadosJson = XLSX.utils.sheet_to_json(aba, { header: 1 });
                dadosJson.slice(1).forEach(linha => {
                    const tr = document.createElement('tr');
                    linha.forEach((celula, indice) => {
                        const td = document.createElement('td');
                        if (indice === 2) {
                            td.textContent = Number(celula).toLocaleString('pt-BR');
                        } else {
                            td.textContent = celula;
                        }
                        tr.appendChild(td);
                    });
                    corpoTabela.appendChild(tr);
                })
            })
    }
    carregarDados()

    function destacarCelulas(evento) {
        const celulas = document.querySelectorAll('#tabela-dados td, #tabela-dados th');
        celulas.forEach(celula => {
            celula.classList.remove('destaque', 'destaque-atual');
        });

        if (evento.target.tagName === 'TD') {
            const indiceTd = evento.target.cellIndex;
            const indiceTr = evento.target.parentNode.rowIndex;
            document.querySelectorAll(`#tabela-dados tr:nth-child(${indiceTr}) td`)
                .forEach(td => td.classList.add('destaque'));
            document.querySelectorAll(`#tabela-dados tr td:nth-child(${indiceTd + 1})`)
                .forEach(td => td.classList.add('destaque'));

            document.querySelector(`#tabela-dados tr:nth-child(1) th:nth-child(${indiceTd + 1})`)
                .classList.add('destaque');

            evento.target.classList.add('destaque-atual');
        }
    }
    corpoTabela.addEventListener('mouseover', destacarCelulas);
});