document.addEventListener('DOMContentLoaded', function () {
    var alunos = [
        { nome: 'Ana', notas: [8, 9, 7, 6] },
        { nome: 'Bruno', notas: [5, 4, 6, 7] },
        { nome: 'Carla', notas: [10, 9, 10, 8] },
        { nome: 'Daniel', notas: [2, 3, 4, 5] },
        { nome: 'Eduarda', notas: [7, 6, 5, 6] },
        { nome: 'Felipe', notas: [8, 8, 9, 7] },
        { nome: 'Gustavo', notas: [5, 6, 5, 5] },
        { nome: 'Helena', notas: [10, 10, 10, 10] },
        { nome: 'Igor', notas: [6, 7, 8, 6] },
        { nome: 'Julia', notas: [9, 9, 8, 9] }
    ];

    var tabela = document.getElementById('tabelaAlunos').getElementsByTagName('tbody')[0];
    function exibirAlunos(alunosFiltrados) {
        tabela.innerHTML = '';
        alunosFiltrados.forEach(aluno => {
            var media = aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length;
            var status;
            var statusClass;
            var icon;
            if (media >= 7) {
                status = 'Aprovado';
                statusClass = 'aprovado';
                icon = '✔️'
            } else if (media >= 5) {
                status = 'Exame';
                statusclass = 'exame';
                icon = '⚠️';
            } else {
                status = 'Reprovado';
                statusClass = 'reprovado';
                icon = '❌';
            }

            var linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${aluno.nome}</td>
                <td>${aluno.notas[0]}</td>
                <td>${aluno.notas[1]}</td>
                <td>${aluno.notas[2]}</td>
                <td>${aluno.notas[3]}</td>
                <td>${media.toFixed(2)}</td>
                <td class="${statusClass}"><span class="icon">${icon}</span> ${status}</td>
            `;
            tabela.appendChild(linha);
        });
    };

    exibirAlunos(alunos);

    document.getElementById('filtroNome').addEventListener('input', function () {
        var filtro = this.value.toLowerCase();
        var alunosFiltrados = alunos.filter(aluno => aluno.nome.toLowerCase().includes(filtro));
        exibirAlunos(alunosFiltrados);
    });
});