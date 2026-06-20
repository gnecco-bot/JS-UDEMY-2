document.getElementById('mudarTexto').addEventListener('click', function () {
    var titulo = document.getElementById('titulo');
    titulo.textContent = 'Titulo Alterado';
});

document.getElementById('modificarHTML').addEventListener('click', function () {
    var conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = '<p> novo conteúdo em <strong>HTML</strong>!</p>';
});

document.getElementById('adicionarElemento').addEventListener('click', function () {
    var novoElemento = document.createElement('p');
    novoElemento.textContent = 'Um novo parágrafo adicionado!';
    document.body.appendChild(novoElemento);
});

document.getElementById('removerElemento').addEventListener('click', function () {
    var conteudo = document.getElementById('conteudo');
    if (conteudo.firstChild) {
        conteudo.removeChild(conteudo.firstChild);
    };
});

document.getElementById('substituirElemento').addEventListener('click', function () {
    var novoElemento = document.createElement('p');
    novoElemento.textContent = "Este é um elemento substituido.";
    var conteudo = document.getElementById('conteudo');
    if (conteudo.firstChild) {
        conteudo.replaceChild(novoElemento, conteudo.firstChild);
    }
});