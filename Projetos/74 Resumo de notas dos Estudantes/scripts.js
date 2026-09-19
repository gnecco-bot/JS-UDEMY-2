document.addEventListener('DOMContentLoaded', function () {
    const tabelaResumo = document.getElementById('resumo-tabela').getElementsByTagName('tbody')[0];
    const tooltip = document.getElementById('tooltip');
    const tooltipDetalhe = document.getElementById('tooltip-detalhe');
    const filtroTooltip = document.getElementById('filtro-tooltip');
    let tooltipAtivo = false;
    let tooltipDetalheAtivo = false;

    function carregarArquivoExcel() {
        const url = 'notas_estudantes.xlsx';
        fetch(url)
            .then(response => response.arrayBuffer())
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                processarDados(jsonData)
            })
            .catch(error => console.error('Erro ao carregar arquivo Excel: ', error));
    }
    function processarDados(data) {
        const turmas = {};
        data.slice(1).forEach(row => {
            const [nome, turma, nota1, nota2, nota3, nota4, faltas] = row;
            const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) / 4)
            let situacao = "Aprovado";
            if (faltas > 10) {
                situacao = "Reprovados por faltas";
            } else if (media < 2) {
                situacao = "Reprovado por nota";
            } else if (media < 7) {
                situacao = "reprovado";
            }

            if (!turmas[turma]) {
                turmas[turma] = {
                    mediaTotal: 0,
                    totalAlunos: 0,
                    totalFaltas: 0,
                    alunos: [],
                    situacoes: { "Aprovado": 0, "Reprovado por faltas": 0, "Reprovado por nota": 0, "Recuperação": 0 }
                };
            }

            turmas[turma].mediaTotal += media;
            turmas[turma].totalAlunos += 1;
            turmas[turma].totalFaltas += parseInt(faltas);
            turmas[turma].alunos.push({ nome, nota1, nota2, nota3, nota4, media, situacao, faltas });
            turmas[turma].situacoes[situacao] += 1;
        });
        exibirResumo(turmas);
    }

    function exibirResumo(turmas) {
        for (const turma in turmas) {
            const { mediaTotal, totalAlunos, totalFaltas, alunos } = turmas[turma];
            const mediaTurma = (mediaTotal / totalAlunos).toFixed(2);
            const row = tabelaResumo.insertRow();
            row.insertCell(0).innerText = turma;
            row.insertCell(1).innerText = mediaTurma;
            row.insertCell(2).innerText = totalFaltas;
            row.addEventListener('mouseover', function (event) {
                tooltipAtivo = true;
                mostrarTooltip(event, turma, alunos);
            });
            row.addEventListener('mouseout', function () {
                tooltipAtivo = false;
                setTimeout(function () {
                    if (!tooltipAtivo && !tooltipDetalheAtivo) esconderTooltip();
                }, 500);
            });
        }
    }
    function mostrarTooltip(event, turma, alunos) {
        const tabelaTooltip = document.getElementById('tooltip-tabela').getElementsByTagName('tbody')[0];
        tabelaTooltip.innerHTML = '';
        document.getElementById('tooltip-titulo').innerHTML = `Série: ${turma}`;
        alunos.forEach(aluno => {
            const row = tabelaTooltip.insertRow();
            row.insertCell(0).innerText = aluno.nome;
            row.insertCell(1).innerText = aluno.media.toFixed(2);
            const situacaoCell = row.insertCell(2);
            situacaoCell.innerText = aluno.situacao;
            if (aluno.situacao === "Aprovado") {
                situacaoCell.className = 'status-aprovado';
            } else if (aluno.situacao === "Reprovado por faltas" || aluno.situacao === "Reprovado por nota") {
                situacaoCell.className = 'status-reprovado';
            } else if (aluno.situacao === "Recuperação") {
                situacaoCell.className = 'status-recuperação';
            };
            row.cells[0].addEventListener('mouseover', function (event) {
                tooltipAtivo = true;
                mostrarTooltipDetalhe(event, aluno);
            });
            row.cells[0].addEventListener('mouseout', function () {
                tooltipDetalheAtivo = false;
                setTimeout(function () {
                    if (!tooltipDetalheAtivo) esconderTooltipDetalhe();
                }, 500);
            });
        });
        const x = event.clientX + 10;
        const y = event.clientY + 10;

        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;

        tooltip.style.display = 'block';

        filtroTooltip.addEventListener('input', function () {
            filtrarTooltipTabela(alunos);
        });
        tooltip.addEventListener('mouseover', function () {
            tooltipAtivo = true;
        });
        tooltip.addEventListener('mouseout', function () {
            tooltipAtivo = false;
            setTimeout(function () {
                if (!tooltipAtivo && !tooltipDetalheAtivo) esconderTooltip();
            }, 1000);
        });
    }

    function mostrarTooltipDetalhe(event, aluno) {
        tooltipDetalhe.innerHTML = `
        <div style="padding: 10px; font-size: 16px">
            <strong>Nome:</strong> ${aluno.nome}<br>
            <hr>
            <table>
                <tr>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Nota 3</th>
                    <th>Nota 4</th>
                </tr>
                <tr>
                    <td>${aluno.nota1}</td>
                    <td>${aluno.nota2}</td>
                    <td>${aluno.nota3}</td>
                    <td>${aluno.nota4}</td>
                </tr>
            </table>
            </hr>
            <br>
            <strong>Média:<strong> ${aluno.media.toFixed(2)}<br><br>
            <strong>Situação:<strong> ${aluno.situacao}<br><br>
            <strong>Faltas:<strong> ${aluno.faltas}<br><br>
        </div>`;
        const x = event.clientX + 10;
        const y = event.clientY + 10;
        tooltipDetalhe.style.left = `${x}px`
        tooltipDetalhe.style.top = `${y}px`
        tooltipDetalhe.style.display = 'block';
        tooltipDetalhe.addEventListener('mouseover', function () {
            tooltipDetalheAtivo = true;
        });
        tooltipDetalhe.addEventListener('mouseout', function () {
            tooltipDetalheAtivo = false;
            setTimeout(function () {
                if (!tooltipDetalheAtivo) esconderTooltipDetalhe();
            }, 500);
        });
    };


    function esconderTooltipDetalhe() {
        tooltipDetalhe.style.display = 'none';
    }

    function filtrarTooltipTabela(alunos) {
        const filtro = filtroTooltip.ariaValueMax.toLocaleLowerCase();
        const tabelaTooltip = document.getElementById('tooltip-tabela').getElementsByTagName('tbody')[0]
        tabelaTooltip.innerHTML = '';
        alunos.forEach(aluno => {
            if (aluno.nome.toLocateLowerCase().includes(filtro) || aluno.situacao.toLocaleLowerCase().includes(filtro)) {
                const row = tabelaTooltip.insertRow();
                row.insertCell(0).innerText = aluno.nome;
                row.insertCell(1).innerText = aluno.media.toFixed(2);
                const situacaoCell = row.insertCell(2);
                situacaoCell.innerText = aluno.situacao;
                if (aluno.situacao === "Aprovado") {
                    situacaoCell.className = 'status-aprovado';
                } else if (aluno.situacao === "Reprovado por Faltas" || alunos.situacao === "Reprovado por nota") {
                    situacaoCell.className = 'status-reprovado';
                } else if (aluno.situacao === "Recuperação") {
                    situacaoCell.className = 'status-recuperacao';
                }
                row.cells[0].addEventListener('mouseover', function (event) {
                    tooltipDetalheAtivo = true;
                    mostrarTooltipDetalhe(event, aluno);
                });
                row.cells[0].addEventListener('mouseout', function () {
                    tooltipAtivo = false;
                    setTimeout(() => {
                        if (!tooltipDetalheAtivo) esconderTooltipDetalhe();
                    }, 500);
                });
            };
        });
    }

    function esconderTooltip() {
        if (!tooltipAtivo) {
            tooltip.style.display = 'none';
        }
    }

    carregarArquivoExcel()
});