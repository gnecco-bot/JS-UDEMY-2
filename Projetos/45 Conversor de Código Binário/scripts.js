function converterParaBinario() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    let resultadoBinario = '';
    for (let i = 0; i < textoEntrada.length; i++) {
        const binario = textoEntrada.charCodeAt(i).toString(2).padStart(8, '0');
        resultadoBinario += binario + ' ';
    }
    document.getElementById('textoSaida').value = resultadoBinario.trim();
}

function converterParaTexto() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    const arrayBinario = textoEntrada.split(' ');
    let resultadoTexto = '';
    for (let i = 0; i < arrayBinario.length; i++) {
        const decimal = parseInt(arrayBinario[i], 2);
        resultadoTexto += String.fromCharCode(decimal);
    }
    document.getElementById('textoSaida').value = resultadoTexto;
}

function mostrarExplicacao() {
    document.getElementById('modalExplicacao').style.display = 'block';
}

function fecharExplicacao() {
    document.getElementById('modalExplicacao').style.display = 'none'
}

window.onclick = function (event) {
    const modal = document.getElementById('modalExplicacao');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};