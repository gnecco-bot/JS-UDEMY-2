document.addEventListener('DOMContentLoaded', function () {
    const tabela = document.getElementById('tabela-dados').getElementsByTagName('tbody')[0];
    const tooltip = document.getElementById('tooltip');
    let tempoEsconderTooltip;

    function carregarExcel() {
        const arquivo = 'Estados.xlsx';
        fetch(arquivo)
            .then(response => response.arrayBuffer())
            .then(data => {
                const planilha = XLSX.read(data, { type: 'array' });
                const abasDados = planilha.Sheets['Dados'];
                const dadosJSON = XLSX.utils.sheet_to_json(abasDados, { header: 1 });
                processarDados(dadosJSON);
            })
            .catch(error => {
                console.error('Error ao carregar o arquivo.', error);
            });
    }
    function processarDados(dados) {
        dados.slice(1).forEach(linha => {
            const estado = linha[0];
            const cidade = linha[1];
            const totalHabitantes = linha[2];

            const tr = document.createElement('tr');
            tr.setAttribute('data-estado', estado);
            tr.setAttribute('data-cidade', cidade);

            tr.innerHTML = `
                <td>${estado}</td>
                <td>${cidade}</td>
                <td>${formatarNumero(totalHabitantes)}</td>
            `;
            tr.addEventListener('mouseover', function (evento) {
                clearTimeout(tempoEsconderTooltip);
                exibirTooltip(evento, estado, cidade);
            });

            tr.addEventListener('mouseout', function () {
                tempoEsconderTooltip = setTimeout(esconderTooltip, 300);
            });

            tabela.appendChild(tr);
        });
    };

    function esconderTooltip() {
        tooltip.style.display = 'none';
    };

    function formatarNumero(numero) {
        return numero.toLocaleString('pt-BR');
    }

    function exibirTooltip(evento, estado, cidade) {
        tooltip.innerHTML = `
            <p><strong>Estado:</strong> ${estado}</p>
            <p><strong>Cidade:</strong> ${cidade}</p>
            <button id="filtro-estado">Filtrar por Estado</button>
            <button id="filtro-cidade">Filtrar por Cidade</button>
            <button id="limpar-filtro">Limpar Filtro</button>
        `;

        tooltip.style.display = 'block';

        tooltip.style.left = evento.pageX + 'px';
        tooltip.style.top = evento.pageY + 'px';

        document.getElementById('filtro-estado').addEventListener('click', function () {
            filtrarPorEstado(estado);
        });

        document.getElementById('filtro-cidade').addEventListener('click', function () {
            filtrarPorCidade(cidade);
        });

        document.getElementById('limpar-filtro').addEventListener('click', limparFiltro);
    };

    function filtrarPorEstado(estado) {
        const linhas = tabela.getElementsByTagName('tr');

        for (let linha of linhas) {
            if (linha.getAttribute('data-estado') !== estado) {
                linha.style.display = 'none';
            } else {
                linha.style.display = '';
            };
        }
        esconderTooltip();
    }

    function filtrarPorCidade(cidade) {
        const linhas = tabela.getElementsByTagName('tr');

        for (let linha of linhas) {
            if (linha.getAttribute('data-cidade') !== cidade) {
                linha.style.display = 'none';
            } else {
                linha.style.display = '';
            };
        }
        esconderTooltip();
    }

    function limparFiltro() {
        const linhas = tabela.getElementsByTagName('tr');

        for (let linha of linhas) {
            linha.style.display = '';
        }

        esconderTooltip();
    };

    tooltip.addEventListener('mouseover', function () {
        clearTimeout(tempoEsconderTooltip);
    });

    tooltip.addEventListener('mouseout', function () {
        tempoEsconderTooltip = setTimeout(esconderTooltip, 300);
    });

    carregarExcel();
});