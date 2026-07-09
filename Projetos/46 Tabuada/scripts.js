function gerarTabuada() {
    const numero = parseFloat(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (isNaN(numero)) {
        resultado.innerHTML = '<p>Por favor, insira um número válido<p>'
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const multiplicacao = numero * i;
        const paragrafo = document.createElement('p');
        paragrafo.textContent = `${numero} x ${i} = ${multiplicacao}`
        resultado.appendChild(paragrafo);
    }
}