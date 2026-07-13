document.addEventListener('DOMContentLoaded', function () {
    const botoesComprar = document.querySelectorAll('.botao-comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', function () {
            const planoId = this.parentElement.id;
            window.location.href = `assinatura.html?plano=${planoId}`;
        });
    });
});