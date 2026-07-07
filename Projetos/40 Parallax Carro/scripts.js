document.addEventListener('scroll', function () {
    const elementosParallax = document.querySelectorAll('.parallax');
    elementosParallax.forEach(function (elemento) {
        let deslocamento = window.pageYOffset;
        elemento.style.backgroundPositionY = deslocamento * 0.7 + 'px';
    });
});