document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('grafico-vendas').getContext('2d');
    let chart = null;
    function carregarExcel() {
        const arquivo = 'VendasComparacao.xlsx';
        fetch(arquivo)
            .then(response => response.arrayBuffer())
            .then(data => {
                const planilha = XLSX.read(data, { type: 'array' });
                const abaVendas = planilha.Sheets['Vendas'];
                const dadosJSON = XLSX.utils.sheet_to_json(abaVendas, { header: 1 });
                processarDados(dadosJSON);
            })
            .catch(error => console.error('Error ao carregar o arquivo Excel:', error))
    };

    function processarDados(dados) {
        const produtos = dados.slice(1).map(linha => linha[0]);
        const vendasAtual = dados.slice(1).map(linha => linha[1]);
        const vendasAnterior = dados.slice(1).map(linha => linha[2]);;
        const datasets = {
            labels: produtos,
            datasets: [{
                label: 'Vendas Atual',
                data: vendasAtual,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };

        chart = new Chart(ctx, {
            type: 'bar',
            data: datasets,
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const indice = context.dataIndex;
                                const vendaAtual = vendasAtual[indice];
                                const vendaAnterior = vendasAnterior[indice];
                                const diferenca = vendaAtual - vendaAnterior;
                                const porcentagem = ((diferenca / vendaAnterior) * 100).toFixed(2);
                                return [
                                    `Vendas Atual: ${vendaAtual.toLocaleString('pt-BR')}`,
                                    `Vendas Anterior: ${vendaAnterior.toLocaleString('pt-BR')}`,
                                    `Diferença: ${diferenca > 0 ? '+' : ''}${diferenca.toLocaleString('pt-BR')}`,
                                    `Porcentagem: ${porcentagem}%`,
                                ];
                            }
                        }
                    }
                }
            }
        });
    }

    carregarExcel();
});