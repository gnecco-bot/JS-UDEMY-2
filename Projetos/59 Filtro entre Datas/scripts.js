document.addEventListener('DOMContentLoaded', () => {
    fetch("Produtos.xlsx")
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = 'Dados';
            const sheet = workbook.Sheets[sheetName];
            const dadosExcel = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            dadosExcel.forEach((linha, indice) => {
                if (indice > 0) {
                    linha[4] = XLSX.SSF.parse_date_code(linha[4]);
                }
            });
            gerarTabelaPaginadaComFiltro(dadosExcel);
        })
        .catch(error => console.error('Erro ao carregar arquivo Excel', error));
});
document.getElementById('botao-exportar').addEventListener('click', exportarTabela, false);

let tabelaFiltradaGlobal = [];

function gerarTabelaPaginadaComFiltro(dados) {
    const containerTabela = document.getElementById('container-tabela');
    containerTabela.innerHTML = '';
    const tabela = document.createElement('table');
    const corpoTabela = document.createElement('tbody');
    const linhasPorPagina = 5;
    let paginaAtual = 1;
    let totalPaginas;
    const linhaFiltros = document.createElement('tr');
    const filtros = Array(dados[0].length).fill('');
    dados[0].forEach((coluna, indiceColuna) => {
        const th = document.createElement('th');
        if (coluna === "Data de Vencimento") {
            const inputFiltroInicio = document.createElement('input')
            inputFiltroInicio.type = 'date';
            inputFiltroInicio.placeholder = "Data Ínicio";
            const inputFiltroFim = document.createElement('input');
            inputFiltroFim.type = 'date';
            inputFiltroFim.placeholder = 'Data Fim';

            inputFiltroInicio.addEventListener('input', () => {
                filtros[indiceColuna] = { inicio: inputFiltroInicio.value, fim: inputFiltroFim.value };
                paginaAtual = 1;
                renderizarTabela();
            })

            inputFiltroFim.addEventListener('input', () => {
                filtros[indiceColuna] = { inicio: inputFiltroInicio.value, fim: inputFiltroFim.value };
                paginaAtual = 1;
                renderizarTabela();
            });
            th.appendChild(inputFiltroInicio);
            th.appendChild(inputFiltroFim);
        } else {
            const inputFiltro = document.createElement('input');
            inputFiltro.type = 'text';
            inputFiltro.placeholder = `Filtrar ${coluna}`;
            inputFiltro.addEventListener('input', (event) => {
                filtros[indiceColuna] = event.target.value.toLowerCase();
                paginaAtual = 1;
                renderizarTabela();
                inputFiltro.focus();
            });
            th.appendChild(inputFiltro);
        }
        linhaFiltros.appendChild(th);
    });
    function renderizarTabela() {
        tabelaFiltradaGlobal = dados.filter((linha, indiceLinha) => {
            return indiceLinha === 0 || linha.every((celula, indiceCelula) => {
                if (dados[0][indiceCelula] === "Data de Vencimento") {
                    const dataVencimento = new Date(linha[indiceCelula].y, linha[indiceCelula].m - 1, linha[indiceCelula].d);
                    const filtroData = filtros[indiceCelula];

                    if (!filtroData || (!filtroData.inicio && !filtroData.fim)) return true;

                    if (filtroData.inicio && new Date(filtroData.inicio) > dataVencimento) return false;

                    if (filtroData.fim && new Date(filtroData.fim) < dataVencimento) return false;
                    return true;

                } else {
                    return celula.toString().toLowerCase().includes(filtros[indiceCelula]);
                }
            });
        });
        totalPaginas = Math.ceil((tabelaFiltradaGlobal.length - 1) / linhasPorPagina)
        corpoTabela.innerHTML = '';
        corpoTabela.appendChild(linhaFiltros);
        const inicio = (paginaAtual - 1) * linhasPorPagina;
        const fim = inicio + linhasPorPagina;
        const dadosPagina = [tabelaFiltradaGlobal[0]].concat(tabelaFiltradaGlobal.slice(inicio + 1, fim + 1));

        dadosPagina.forEach((linha, indiceLinha) => {
            const tr = document.createElement('tr');
            linha.forEach((celula, indiceCelula) => {
                const elementoCelula = indiceLinha === 0 ? document.createElement('th') : document.createElement('td');
                if (indiceLinha !== 0 && dados[0][indiceCelula] === "Data de Vencimento") {
                    elementoCelula.textContent = new Date(celula.y, celula.m - 1, celula.d).toLocaleDateString('pt-BR');
                } else {
                    elementoCelula.textContent = celula;
                }
                tr.appendChild(elementoCelula);
            });
            corpoTabela.appendChild(tr);
        });
        tabela.appendChild(corpoTabela);
        atualizarBotoes();
        atualizarFiltros();
    }

    function atualizarBotoes() {
        botaoPrimeira.disabled = paginaAtual === 1;
        botaoAnterior.disabled = paginaAtual === 1;
        botaoProximo.disabled = paginaAtual === totalPaginas;
        botaoUltima.disabled = paginaAtual === totalPaginas;
        textoPaginacao.textContent = `${paginaAtual} de ${totalPaginas}`;
    }
    function atualizarFiltros() {
        dados[0].forEach((coluna, indiceColuna) => {
            if (coluna === "Data de Vencimento") {
                const th = linhaFiltros.children[indiceColuna];
                const inputFiltroInicio = th.children[0];
                const inputFiltroFim = th.children[1];
                const filtroData = filtros[indiceColuna];
                if (filtroData) {
                    inputFiltroInicio.value = filtroData.inicio;
                    inputFiltroFim.value = filtroData.fim;
                }
            } else {
                const th = linhaFiltros.children[indiceColuna];
                const inputFiltro = th.children[0];
                inputFiltro.value = filtros[indiceColuna];
            }
        });
    }

    const paginacao = document.createElement('div');
    paginacao.className = 'paginacao';

    const botaoPrimeira = document.createElement('button');
    botaoPrimeira.textContent = 'Primeira';
    botaoPrimeira.onclick = () => {
        paginaAtual = 1;
        renderizarTabela()
    };
    paginacao.appendChild(botaoPrimeira)

    const botaoAnterior = document.createElement('button');
    botaoAnterior.textContent = 'Anterior';
    botaoAnterior.onclick = () => {
        if (paginaAtual > 1) {
            paginaAtual--;
            renderizarTabela()
        }
    };
    paginacao.appendChild(botaoAnterior);

    const textoPaginacao = document.createElement('span');
    textoPaginacao.textContent = `${paginaAtual} de ${totalPaginas}`;
    paginacao.appendChild(textoPaginacao);

    const botaoProximo = document.createElement('button');
    botaoProximo.textContent = 'Próximo';
    botaoProximo.onclick = () => {
        if (paginaAtual < totalPaginas) {
            paginaAtual++;
            renderizarTabela()
        }
    };
    paginacao.appendChild(botaoProximo);

    const botaoUltima = document.createElement('button');
    botaoUltima.textContent = 'Última';
    botaoUltima.onclick = () => {
        paginaAtual = totalPaginas;
        renderizarTabela();
    };
    paginacao.appendChild(botaoUltima);

    containerTabela.appendChild(tabela);
    containerTabela.appendChild(paginacao);

    renderizarTabela();
};

function exportarTabela() {
    if (!tabelaFiltradaGlobal || tabelaFiltradaGlobal.length === 0) return;
    const dadosExportar = tabelaFiltradaGlobal.map((linha, indiceLinha) => {
        if (indiceLinha === 0) return linha;
        return linha.map((celula, indiceColuna) => {
            if (typeof celula === 'object' && celula !== null && 'y' in celula && 'm' in celula && 'd' in celula) {
                return new Date(celula.y, celula.m, celula.d).toLocaleDateString('pt-BR');
            };
            return celula;
        });
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(dadosExportar);
    XLSX.utils.book_append_sheet(wb, ws, 'Tabela Exportada');
    XLSX.writeFile(wb, 'tabela_exportada.xlsx');
}