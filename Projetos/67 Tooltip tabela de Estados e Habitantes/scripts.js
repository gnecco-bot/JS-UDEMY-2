document.addEventListener('DOMContentLoaded', function () {
    const tabela = document.getElementById('tabela-estados').getElementsByTagName('tbody')[0];
    const tooltip = document.getElementById('tooltip');
    let tempoEsconderTooltip;

    function carregarExcel() {
        const arquivo = 'Estados.xlsx';
        fetch(arquivo)
            .then(response => response.arrayBuffer())
            .then(data => {
                const planilha = XLSX.read(data, { type: 'array' });
                const abaDados = planilha.Sheets['Dados'];
                const dadosJSON = XLSX.utils.sheet_to_json(abaDados, { header: 1 });
                processarDados(dadosJSON);
            })
            .catch(error => console.error('Error ao carregar o arquivo Excel', error));
    }

    function processarDados(dados) {
        const estados = {};

        dados.slice(1).forEach(linha => {
            const estado = linha[0];
            const cidade = linha[1];
            const totalHabitantes = linha[2];
            if (estados[estado]) {
                estados[estado].totalHabitantes += totalHabitantes;
                estados[estado].cidades.push({ cidade, totalHabitantes });
            } else {
                estados[estado] = {
                    totalHabitantes,
                    cidades: [{ cidade, totalHabitantes }]
                };
            }
        });

        for (const estado in estados) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${estado}</td>
                <td>${formatarNumero(estados[estado].totalHabitantes)}</td>
            `;
            tr.addEventListener('mouseover', function (evento) {
                clearTimeout(tempoEsconderTooltip);
                exibirTooltip(evento, estado, estados[estado].cidades);
            });
            tr.addEventListener('mouseout', function () {
                tempoEsconderTooltip = setTimeout(esconderTooltip, 300);
            });
            tabela.appendChild(tr);
        }
    }

    function formatarNumero(numero) {
        return numero.toLocaleString('pt-BR');
    }

    function exibirTooltip(evento, estado, cidades) {
        let cidadesHtml = '';
        cidades.forEach(cidade => {
            cidadesHtml += `<p><strong>Cidade:</strong> ${cidade.cidade} - <strong>Total de Habitantes:</strong> ${formatarNumero(cidade.totalHabitantes)}</p>`
        });
        tooltip.innerHTML = `
            <p><strong>Estado:</strong> ${estado}</p>
            ${cidadesHtml}
            <button id="botao-exportar">Exportar para Excel</button>
        `;
        tooltip.style.display = 'block';
        tooltip.style.left = evento.pageX + 'px';
        tooltip.style.top = evento.pageY + 'px';

        document.getElementById('botao-exportar').addEventListener('click', function () {
            exportarParaExcel(estado, cidades);
        });
    };

    function esconderTooltip() {
        tooltip.style.display = 'none';
    };

    function exportarParaExcel(estado, cidades) {
        const dadosParaExportar = [
            ['Estados', 'Cidades', 'Total de Habitantes'],
            ...cidades.map(cidade => [estado, cidade.cidade, cidade.totalHabitantes])
        ];
        const planilha = XLSX.utils.aoa_to_sheet(dadosParaExportar);
        const pastaDeTrabalho = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(pastaDeTrabalho, planilha, 'Dados');
        XLSX.writeFile(pastaDeTrabalho, `${estado}_dados.xlsx`);
    }

    tooltip.addEventListener('mousemove', function () {
        clearTimeout(tempoEsconderTooltip);
    });

    tooltip.addEventListener('mouseoutr', function () {
        tempoEsconderTooltip = setTimeout(esconderTooltip, 300);
    });

    carregarExcel();
});