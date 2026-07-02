document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botao-negrito').addEventListener('click', () => aplicarEstilo('bold'));
    document.getElementById('botao-italico').addEventListener('click', () => aplicarEstilo('italic'));
    document.getElementById('botao-sublinhado').addEventListener('click', () => aplicarEstilo('underline'));
    document.getElementById('seletor-tamanho-fonte').addEventListener('change', function () {
        var tamanhoFonte = this.value;
        aplicarTamanhoFonte(tamanhoFonte);
    });
    document.getElementById('seletor-tipo-fonte').addEventListener('change', function () {
        aplicarEstilo('fontName', this.value);
    });
    document.getElementById('seletor-cor').addEventListener('input', function () {
        aplicarEstilo('foreColor', this.value);
    });
    document.getElementById('botao-alinhar-esquerda').addEventListener('click', () => aplicarEstilo('justifyLeft'))
    document.getElementById('botao-alinhar-centro').addEventListener('click', () => aplicarEstilo('justifyCenter'))
    document.getElementById('botao-alinhar-direita').addEventListener('click', () => aplicarEstilo('justifyRight'))
    document.getElementById('botao-inserir-marcadores').addEventListener('click', () => {
        aplicarEstilo('insertUnorderedList');
        ajustarTamanhoListas(this.value);
    });
    document.getElementById('botao-inserir-imagem').addEventListener('click', function () {
        document.getElementById('entrada-imagem').click();
    });
    document.getElementById('entrada-imagem').addEventListener('change', inserirImagem);
    document.getElementById('botao-exportar').addEventListener('click', exportarConteudo);
});

function aplicarEstilo(comando, valor = null) {
    document.execCommand(comando, false, valor);
};

function aplicarTamanhoFonte(tamanhoFonte) {
    const selecao = window.getSelection();
    if (!selecao.rangeCount) return;
    let range = selecao.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontSize = `${tamanhoFonte}px`;
    range.surroundContents(span);
};

function ajustarTamanhoListas(tamanhoFonteSelecionada) {
    const editor = document.getElementById('editor');
    const tamanhoFonte = tamanhoFonteSelecionada || editor.style.fontSize;
    const listas = editor.querySelectorAll('ul, ol');
    listas.forEach(lista => {
        lista.style.fontSize = tamanhoFonte;
    });
}

function inserirImagem(event) {
    const arquivo = event.target.files[0];
    if (!arquivo) return;
    const leitor = new FileReader();
    leitor.onload = function (e) {
        const src = e.target.result;
        const editor = document.getElementById('editor');
        if (!imagemJaAdicionada(src, editor)) {
            const img = document.createElement('img');
            img.src = src;
            img.style.maxWidth = '100%';
            editor.appendChild(img);
        }
    };
    leitor.readAsDataURL(arquivo);
    event.target.value = '';
};

function imagemJaAdicionada(src, editor) {
    const imagens = editor.getElementsByTagName('img');
    for (let i = 0; i < imagens.length; i++) {
        if (imagens[i].src === src) {
            return true;
        };
    };
    return false;
}

function exportarConteudo() {
    const conteudo = document.getElementById('editor').innerHTML;
    const blob = new Blob([conteudo], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'conteudoEditor.html';
    link.click();
    document.body.removeChild(link);
}