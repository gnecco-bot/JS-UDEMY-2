function abrirPagina(pagina) {
    window.location.href = pagina;
}
document.addEventListener('DOMContentLoaded', function () {
    const scrollers = document.querySelectorAll('.conteudo-led');
    scrollers.forEach(conteudoTexto => {
        conteudoTexto.addEventListener('mouseover', function () {
            this.style.animationPlayState = 'paused';
        });
        conteudoTexto.addEventListener('mouseout', function () {
            this.style.animationPlayState = 'running';
        });
    });
});