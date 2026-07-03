function sortearNumero() {
    const minimo = parseInt(document.getElementById('numeroMinimo').value);
    const maximo = parseInt(document.getElementById('numeroMaximo').value);
    const contadorElemento = document.getElementById('contador');
    const numeroSorteadoElemento = document.getElementById('numeroSorteado');

    if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
        alert('Por favor, insira um intervalo válido.');
        return;
    }
    contadorElemento.textContent = '5';
    numeroSorteadoElemento.textContent = '';
    contadorElemento.style.opacity = '1';
    numeroSorteadoElemento.style.opacity = '0'
    let contador = 5;
    const intervalo = setInterval(() => {
        contador--;
        contadorElemento.textContent = contador;
        if (contador === 0) {
            clearInterval(intervalo);
            const numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
            contadorElemento.style.opacity = '0';
            numeroSorteadoElemento.textContent = numeroSorteado;
            numeroSorteadoElemento.style.opacity = '1';
        }
    }, 1000)
}