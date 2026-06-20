var botao = document.getElementById('botaoClique');

botao.addEventListener('click', function () {
    alert('Botão foi clicado!');
    event.preventDefault();
});

var areaHover = document.getElementById('areaHover');

areaHover.addEventListener('mouseover', function () {
    areaHover.style.background = 'blue';
});

areaHover.addEventListener('mouseout', function () {
    areaHover.style.background = 'lightgrey';
});

document.addEventListener('DOMContentLoaded', function () {
    alert('O documento foi completamente carregado e analisado.');
});

document.body.addEventListener('click', function () {
    alert('Clique detectado no body!');
}, false);

function alertaBotao() {
    alert('Este alerta não será mais mostrado após a remoção do ouvinte!');
};

botao.addEventListener('click', alertaBotao);

setTimeout(function () {
    1
    botao.removeEventListener('click', alertaBotao);
}, 5000);