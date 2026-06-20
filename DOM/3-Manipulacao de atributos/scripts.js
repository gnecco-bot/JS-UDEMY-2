document.getElementById('modificarAtributo').addEventListener('click', function () {
    var paragrafo = document.getElementById('meuParagrafo');
    paragrafo.setAttribute('title', 'Novo titúlo do parágrafo');
    document.getElementById('resultadoAtributo').textContent = 'Atributo title modificado!';
});

document.getElementById('adicionarAtributo').addEventListener('click', function () {
    var paragrafo = document.getElementById('meuParagrafo');
    paragrafo.setAttribute('class', 'novo-estilo');
    document.getElementById('resultadoAtributo').textContent = 'Atributo class adicionado!';
});

document.getElementById('removerAtributo').addEventListener('click', function () {
    var paragrafo = document.getElementById('meuParagrafo');
    paragrafo.removeAttribute('title');
    document.getElementById('resultadoAtributo').textContent = 'Atributo title removido!';
});

document.getElementById('acessarAtributo').addEventListener('click', function () {
    var paragrafo = document.getElementById('meuParagrafo');
    var title = paragrafo.getAttribute('title');
    document.getElementById('resultadoAtributo').textContent = 'O atributo do title é: ' + title;
});