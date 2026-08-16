document.addEventListener('DOMContentLoaded', function () {
    const corpoTabela = document.querySelector('#tabela-produtos tbody');
    const botaoFiltrar = document.getElementById('filtrar-vencidos');
    const botaoLimpar = document.getElementById('limpar-filtro');
    const botaoExportar = document.getElementById('exportar-excel');

    let dadosOriginais = [];
    let dadosVisiveis = [];

    function converterDataExcel(serial) {
        const utc_days = serial - 25569;
        const date_info = new Date(utc_days * 86400 * 1000);
        const dia = String(date_info.getUTCDate()).padStart(2, '0');
        const mes = String(date_info.getUTCMonth() + 1).padStart(2, '0');
        const ano = date_info.getUTCFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    function carregarDados() {
        fetch('dados.xlsx')
            .then(response => response.arrayBuffer())
            .then(data => {
                const planilha = XLSX.read(data, { type: 'array' });
                const aba = planilha.Sheets['Sheet1'];
                const dadosJson = XLSX.utils.sheet_to_json(aba, { header: 1 });
                const hoje = new Date();
                dadosOriginais = dadosJson.slice(1).map(linha => {
                    const produto = linha[0];
                    const dataPagamentoSerial = linha[1];
                    const valor = linha[2];
                    const dataPagamento = converterDataExcel(dataPagamentoSerial);
                    const [dia, mes, ano] = dataPagamento.split('/');
                    const dataPagamentoDate = new Date(`${ano}-${mes}-${dia}`);
                    const vencido = dataPagamentoDate < hoje;
                    return { produto, dataPagamento, valor, vencido };
                });
                dadosVisiveis = [...dadosOriginais];
                renderizarTabela(dadosVisiveis);
            })
    }
    function renderizarTabela(dados) {
        corpoTabela.innerHTML = '';
        dados.forEach(dado => {
            const tr = document.createElement('tr');
            if (dado.vencido) {
                tr.style.backgroundColor = 'red';
                tr.style.color = 'white';
            } else {
                tr.style.backgroundColor = '';
                tr.style.color = '';
            }
            const tdProduto = document.createElement('td');
            tdProduto.textContent = dado.produto;
            tr.appendChild(tdProduto);
            const tdDataPagamento = document.createElement('td');
            tdDataPagamento.textContent = dado.dataPagamento;
            tr.appendChild(tdDataPagamento);
            const tdValor = document.createElement('td');
            tdValor.textContent = Number(dado.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            tr.appendChild(tdValor);
            corpoTabela.appendChild(tr);
        });
    }

    botaoFiltrar.addEventListener('click', () => {
        dadosVisiveis = dadosOriginais.filter(dado => dado.vencido);
        renderizarTabela(dadosVisiveis);
    });

    botaoLimpar.addEventListener('click', () => {
        dadosVisiveis = [...dadosOriginais];
        renderizarTabela(dadosVisiveis);
    });

    botaoExportar.addEventListener('click', () => {
        const planilha = XLSX.utils.json_to_sheet(dadosVisiveis.map(dado => ({
            produto: dado.produto,
            'Data de Pagamento': dado.dataPagamento,
            Valor: Number(dado.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        })));
        const novoArquivo = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(novoArquivo, planilha, 'Produtos');
        XLSX.writeFile(novoArquivo, 'Produtos_Visiveis.xlsx');
    });

    carregarDados();
});