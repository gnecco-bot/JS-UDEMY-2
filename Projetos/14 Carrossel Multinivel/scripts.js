document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.carrossel');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    const niveis = document.querySelectorAll('.nivel');
    let indiceAtual = 0;
    let intervaloAutoPlay;

    btnAnterior.addEventListener('click', () => {
        clearInterval(intervaloAutoPlay);
        indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : niveis.length - 1;
        atualizarCarrossel();
        iniciarAutoPlay();
    });

    btnProximo.addEventListener('click', () => {
        clearInterval(intervaloAutoPlay);
        indiceAtual = (indiceAtual < niveis.length - 1) ? indiceAtual + 1 : 0;
        atualizarCarrossel();
        iniciarAutoPlay();
    });

    function atualizarCarrossel() {
        carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
    }

    function iniciarAutoPlay() {
        intervaloAutoPlay = setInterval(() => {
            indiceAtual = (indiceAtual < niveis.length - 1) ? indiceAtual + 1 : 0;
            atualizarCarrossel();
        }, 5000);
    };

    iniciarAutoPlay();
});