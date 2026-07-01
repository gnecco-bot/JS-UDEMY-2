document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botao-negrito').addEventListener('click', () => aplicarEstilo('bold'));
    document.getElementById('botao-italico').addEventListener('click', () => aplicarEstilo('italic'));
    document.getElementById('botao-sublinhado').addEventListener('click', () => aplicarEstilo('underline'));
    document.getElementById('seletor-tamanho-fonte').addEventListener('change', function () {
        var tamanhoFonte = this.ariaValueMax;
        aplicarTamanhoFonte(tamanhoFonte);
    });
});

function aplicarEstilo(comando, valor = null) {
    document.execCommand(comando, false, valor);
};

function aplicarTamanhoFonte(tamanhoFonte) {
    const selecao = window.getSelection();
    if (!selecao.rangeCount) return;
    let range = selecao.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontSize = `${tamanhoFonte}`;
    range.surroundContents(span);
};
