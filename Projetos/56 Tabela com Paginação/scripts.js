document.addEventListener('DOMContentLoaded', function () {
    fetch('funcionarios.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = 'Dados';
            const sheet = workbook.Sheets[sheetName];
            const dadosExcel = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            gerarTabelaPaginadaComFiltro(dadosExcel);
        })
        .catch(error => console.error('Erro ao carregar o arquivo excel:', error));
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
    const linhasFiltros = document.createElement('tr');
    const filtros = Array(dados[0].length).fill('');
    dados[0].forEach((coluna, indiceColuna) => {
        const th = document.createElement('th');
        const inputFiltro = document.createElement('input');
        inputFiltro.type = 'text';
        inputFiltro.placeholder = `Filtrar ${coluna}`;
        inputFiltro.addEventListener('input', (event) => {
            filtros[indiceColuna] = event.target.value.toLowerCase();
            renderizarTabela();
            inputFiltro.focus();
        });
        th.appendChild(inputFiltro);
        linhasFiltros.appendChild(th);
    });

    function renderizarTabela() {
        tabelaFiltradaGlobal = dados.filter((linha, indiceLinha) => {
            return indiceLinha === 0 || linha.every((celula, indiceCelula) => {
                return celula.toString().toLowerCase().includes(filtros[indiceCelula]);
            });
        });
        totalPaginas = Math.ceil((tabelaFiltradaGlobal.length - 1) / linhasPorPagina);
        corpoTabela.innerHTML = '';
        corpoTabela.appendChild(linhasFiltros);
        const inicio = (paginaAtual - 1) * linhasPorPagina;
        const fim = inicio + linhasPorPagina
        const dadosPagina = [tabelaFiltradaGlobal[0]].concat(tabelaFiltradaGlobal.slice(inicio + 1, fim + 1));
        dadosPagina.forEach((linha, indiceLinha) => {
            const tr = document.createElement('tr');
            linha.forEach((celula, indiceCelula) => {
                const elementoCelula = indiceLinha === 0 ? document.createElement('th') : document.createElement('td');
                if (indiceLinha !== 0 && dados[0][indiceCelula] === 'Salário') {
                    elementoCelula.textContent = parseFloat(celula).toLocaleString('pt-BR');
                } else {
                    elementoCelula.textContent = celula;
                }
                tr.appendChild(elementoCelula);
            });
            corpoTabela.appendChild(tr);
        });
        tabela.appendChild(corpoTabela);
        atualizarBotoes();
    };
    function atualizarBotoes() {
        botaoPrimeira.disabled = paginaAtual === 1;
        botaoAnterior.disabled = paginaAtual === 1;
        botaoProximo.disabled = paginaAtual === totalPaginas;
        botaoUltima.disabled = paginaAtual === totalPaginas;
        textoPaginacao.textContent = `${paginaAtual} de ${totalPaginas}`;
    }

    const paginacao = document.createElement('div');
    paginacao.className = 'paginacao';

    const botaoPrimeira = document.createElement('button');
    botaoPrimeira.textContent = 'Primeira';
    botaoPrimeira.onclick = () => {
        paginaAtual = 1;
        renderizarTabela();
    }
    paginacao.appendChild(botaoPrimeira);

    const botaoAnterior = document.createElement('button');
    botaoAnterior.textContent = 'Anterior';
    botaoAnterior.onclick = () => {
        if (paginaAtual > 1) {
            paginaAtual--;
            renderizarTabela();
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
            renderizarTabela();
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

}

function exportarTabela() {
    if (!tabelaFiltradaGlobal || tabelaFiltradaGlobal.length === 0) return;
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(tabelaFiltradaGlobal);
    XLSX.utils.book_append_sheet(wb, ws, 'Tabela Exportada');
    XLSX.writeFile(wb, 'tabela_exportada.xlsx');
}