let indiceAtual = 0;

function mostrarImagem(indice) {
    const imagens = document.querySelectorAll('.imagens-carrossel img');
    if (indice >= imagens.length) indice = 0;
    if (indice < 0) indice = imagens.length - 1;
    imagens.forEach(img => {
        img.style.display = 'none';
    });
    imagens[indice].style.display = 'block';
    indiceAtual = indice;
};

function mover(direcao) {
    mostrarImagem(indiceAtual + direcao);
};

document.addEventListener('DOMContentLoaded', () => {
    mostrarImagem(indiceAtual);
    setInterval(() => mover(1), 5000);
});

function selecionarImagem(indice) {
    mostrarImagem(indice);
}

function abrirEmNovaAba(url) {
    window.open(url, '_blank').focus();
}