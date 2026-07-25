document.addEventListener('DOMContentLoaded', carregarDadosExcel);
let dadosEstudantes = {};

function carregarDadosExcel() {
    fetch('notas_estudantes.xlsx')
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const primeiraAba = workbook.SheetNames[0];
            const planilha = workbook.Sheets[primeiraAba];
            const dadosJson = XLSX.utils.sheet_to_json(planilha, { headers: 1 });
            processarDados(dadosJson);
        });
}

function processarDados(dados) {
    const [cabecalhos, ...linhas] = dados;
    dadosEstudantes = {};
    linhas.forEach(linha => {
        const [nome, turma, ...notasEFaltas] = linha;
        const notas = notasEFaltas.slice(0, -1).map(nota => parseFloat(nota));
        const faltas = parseInt(notasEFaltas[notasEFaltas.length - 1]);
        if (!dadosEstudantes[turma]) {
            dadosEstudantes[turma] = [];
        }
        const media = calcularMedia(notas);
        const status = determinarStatus(media, faltas);
        dadosEstudantes[turma].push({ Nome: nome, Notas: notas, Faltas: faltas, Media: media, Status: status });
    })
    criarAbas(dadosEstudantes)
    document.getElementById('indicador-carregamento').style.display = 'none';
    document.getElementById('conteudo').style.display = 'block';
}

function criarAbas(turmas) {

}

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length
}

function determinarStatus(media, faltas) {
    if (faltas > 10) {
        return 'Reprovado por Faltas';
    } else if (media >= 7) {
        return 'Aprovado';
    } else if (media >= 5) {
        return 'Recuperação';
    } else {
        return 'Reprovado por Nota';
    }
}