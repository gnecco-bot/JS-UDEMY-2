function abrirImagem(imagem, descricao) {
    let url = `imagem.html?imagem=${imagem}&descricao=${encodeURIComponent(descricao)}`;
    window.open(url, '_blank');
}

function obterParametrosURL() {
    let parametros = {};
    let partes = window.location.search.substring(1).split('&');
    for (let i = 0; i < partes.length; i++) {
        let par = partes[i].split('=');
        parametros[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
    }
    return parametros;
}

let parametros = obterParametrosURL();
document.getElementById('imagem').src = parametros.imagem;
document.getElementById('descricao').textContent = parametros.descricao;