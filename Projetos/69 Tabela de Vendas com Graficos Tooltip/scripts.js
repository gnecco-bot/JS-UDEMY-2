document.addEventListener('DOMContentLoaded', function () {
    const tabela = document.getElementById('tabela-produtos').getElementsByTagName('tbody')[0];
    const tooltip = document.getElementById('tooltip');
    let chart = null;
    let tempoEsconderTooltip;
    function carregarExcel() {
        const arquivo = 'ProdutosVendas.xlsx';
        fetch(arquivo)
            .then(response => response.arrayBuffer())
            .then(data => {
                const planilha = XLSX.read(data, { type: 'array' });
                const abaVendas = planilha.Sheets['Vendas'];
                const dadosJSON = XLSX.utils.sheet_to_json(abaVendas, { header: 1 });
                processarDados(dadosJSON);
            })
            .catch(error => console.error('Erro ao carregar o arquivo Excel:', error));
    }

    function processarDados(dados) {
        dados.slice(1).forEach(linha => {
            const produto = linha[0];
            const totalVendas = linha[1];
            const vendasMensais = linha.slice(2, 8);
            const tr = document.createElement('tr');

            tr.setAttribute('data-produto', produto);
            tr.setAttribute('data-vendas-mensais', JSON.stringify(vendasMensais));

            tr.innerHTML = `
                <td>${produto}</td>
                <td>${formatarNumero(totalVendas)}</td>
            `

            tr.addEventListener('mouseover', function (evento) {
                clearTimeout(tempoEsconderTooltip);
                exibirTooltip(evento, produto, vendasMensais);
            });

            tr.addEventListener('mouseout', function () {
                tempoEsconderTooltip = setTimeout(esconderTooltip, 300);
            });

            tabela.appendChild(tr);
        });
    }

    function formatarNumero(numero) {
        return numero.toLocaleString('pt-BR');
    }

    function exibirTooltip(evento, nomeProduto, vendasMensais) {
        tooltip.style.display = 'block';

        tooltip.style.left = evento.pageX + 'px';
        tooltip.style.top = evento.pageY + 'px';

        if (chart) {
            chart.destroy();
        }

        const ctx = document.getElementById('grafico-vendas').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [{
                    label: `Vendas Mensais de ${nomeProduto}`,
                    data: vendasMensais,
                    borderColor: '#FFD700',
                    backgroundColor: 'rgba(255, 215, 0, 0.2)',
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        baginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function esconderTooltip() {
        tooltip.style.display = 'none';
    }

    tooltip.addEventListener('mouseover', function () {
        clearTimeout(tempoEsconderTooltip);
    });

    tooltip.addEventListener('mouseout', function () {
        tempoEsconderTooltip = setTimeout(tempoEsconderTooltip, 300);
    });

    carregarExcel();

})