document.addEventListener('DOMContentLoaded', function () {
    const listaFuncionarios = document.getElementById('lista-funcionarios');
    const caixaTooltip = document.getElementById('caixa-tooltip');
    const nomeTooltip = document.getElementById('nome-tooltip');
    const departamentoTooltip = document.getElementById('departamento-tooltip');
    const emailTooltip = document.getElementById('email-tooltip');
    let idTimeout;

    listaFuncionarios.addEventListener('mouseover', function (e) {
        if (e.target.tagName === 'TD') {
            clearTimeout(idTimeout);
            const linha = e.target.parentNode;
            nomeTooltip.textContent = linha.dataset.nome;
            departamentoTooltip.textContent = linha.dataset.departamento;
            emailTooltip.textContent = `mailto:${linha.dataset.email}`;
            caixaTooltip.style.display = 'block';
            caixaTooltip.style.left = `${e.pageX + 20}px`;
            caixaTooltip.style.top = `${e.pageY + 20}px`;
        }
    });

    listaFuncionarios.addEventListener('mouseout', function () {
        idTimeout = setTimeout(() => {
            caixaTooltip.style.display = 'none';
        }, 500);
    });

    caixaTooltip.addEventListener('mouseover', function () {
        clearTimeout(idTimeout);
    });

    caixaTooltip.addEventListener('mouseout', function () {
        idTimeout = setTimeout(() => {
            caixaTooltip.style.display = 'none'
        }, 500);
    });

});

function enviarEmail() {
    const linkEmail = document.getElementById('email-tooltip');
    const assunto = encodeURIComponent("Informações sobre o Funcionário");
    const corpoMensagem = encodeURIComponent("Olá, \n\nEstou entrando em contato para saber mais as informações sobre as responsabilidadeds deste funcionário. \n\nSeu Nome");
    linkEmail.href = `mailto:${linkEmail.textContent}?subject=${assunto}&body=${corpoMensagem}`;
    window.location.href = linkEmail.href;
}