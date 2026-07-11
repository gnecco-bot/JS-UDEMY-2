document.addEventListener('DOMContentLoaded', function () {
    const botoesAssinar = document.querySelectorAll('.botao-assinar');
    botoesAssinar.forEach(botao => {
        botao.addEventListener('click', function () {
            const planoId = this.parentElement.id;
            window.location.href = `assinatura.html?plano=${planoId}`;
        });
    });
});