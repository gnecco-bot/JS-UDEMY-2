let indiceAtual = 0;
const slides = document.querySelectorAll('.item-carousel');
const containerCarousel = document.querySelector('.container-carousel');
const bannerAnimado = document.getElementById('banner-animado');
const bannerResponsivo = document.getElementById('banner-responsivo');
function mostrarSlides(indice) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        if (i === indice) {
            slide.style.display = 'block';
        }
    });
}

function slideProximo() {
    indiceAtual = (indiceAtual + 1) % slides.length;
    mostrarSlides(indiceAtual);
}

function slideAnterior() {
    indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
    mostrarSlides(indiceAtual);
}

function fecharCarousel() {
    containerCarousel.style.display = 'none';
}

function fecharBannerAnimado(event) {
    event.stopPropagation();
    bannerAnimado.style.display = 'none';
}

function fecharBannerResponsivo() {
    event.stopPropagation();
    bannerResponsivo.style.display = 'none';
}

function abrirLink(url) {
    window.open(url, '_blank');
}

function abrirGoogle() {
    window.open('https://www.google.com.br', '_blank');
}

setInterval(slideProximo, 3000);

mostrarSlides(indiceAtual)