function acessarParent() {
    var item2 = document.getElementById('item2');
    var parent = item2.parentNode;
    document.getElementById('resultado').textContent = 'O pai do "Item 2" é uma tag:' + parent.tagName;
}

function listarChildren() {
    var divPrincipal = document.getElementById('divPrincipal');
    var children = divPrincipal.children;
    var listarFilhos = Array.from(children).map(child => child.tagName).join(', ');
    document.getElementById('resultado').textContent = 'Filhos de "divPrincipal"' + listarFilhos;
};

function irProximo() {
    var item2 = document.getElementById('item2');
    var proximoIrmao = item2.nextSibling;

    while (proximoIrmao && proximoIrmao.nodeType !== 1) {
        proximoIrmao = proximoIrmao.nextSibling;
    };

    document.getElementById('resultado').textContent = proximoIrmao
        ? 'Próximo irmão de "Item 2": ' + proximoIrmao.textContent
        : 'não há próximo irmão.';
};

function irAnterior() {
    var item2 = document.getElementById('item2')
    var irmaoAnterior = item2.previousSibling;
    while (irmaoAnterior && irmaoAnterior.nodeType !== 1) {
        irmaoAnterior = irmaoAnterior.previousSibling
    }
    document.getElementById('resultado').textContent = irmaoAnterior
        ? 'Irmão anterior de "Item 2": ' + irmaoAnterior.textContent
        : 'não há irmão anterior.';
}