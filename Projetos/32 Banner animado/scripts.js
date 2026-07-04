document.getElementById('botaoFecharPrincipal').addEventListener('click', function () {
    document.getElementById('bannerPrincipal').style.display = 'none';
});

document.querySelectorAll('.botaoFechar').forEach(botao => {
    botao.addEventListener('click', function (event) {
        event.stopPropagation();
        this.parentElement.style.display = 'none';
    });
});

document.querySelectorAll('.banner').forEach(banner => {
    banner.addEventListener('click', function () {
        window.open('https://google.com.br');

    });
});