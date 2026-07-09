function calcularAumento() {
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const aumento = parseFloat(document.getElementById('aumento').value);
    const resultadoDiv = document.getElementById('resultado');
    if (isNaN(valorConta) || isNaN(aumento)) {
        resultadoDiv.innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    const valorGorjeta = (valorConta * aumento) / 100;
    const percentualAumento = valorConta + valorGorjeta
    resultadoDiv.innerHTML = `
        <p>Valor do Gorjeta: R$ ${valorGorjeta.toFixed(2)}</p>
        <p>Valor total a pagar: R$ ${percentualAumento.toFixed(2)}</p>
    `;
};