document.getElementById('alterarEstilo').addEventListener('click', function () {
    var paragrafo = document.getElementById('paragrafo');
    paragrafo.style.color = 'blue';
    paragrafo.style.fontSize = '20px';
})

document.getElementById('adicionarClass').addEventListener('click', function () {
    var paragrafo = document.getElementById('paragrafo');
    paragrafo.classList.add('destaque');
});

document.getElementById('removerClass').addEventListener('click', function () {
    var paragrafo = document.getElementById('paragrafo');
    paragrafo.classList.remove('destaque');
});

document.getElementById('alternarClass').addEventListener('click', function () {
    var paragrafo = document.getElementById('paragrafo');
    paragrafo.classList.toggle('fundo-azul');
})