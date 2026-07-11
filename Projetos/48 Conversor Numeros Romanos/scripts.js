function converterParaRomano() {
    const numeroEntrada = document.getElementById('numeroEntrada').value;
    const resultadoDiv = document.getElementById('numeroSaida');
    if (isNaN(numeroEntrada) || numeroEntrada <= 0) {
        resultadoDiv.value = "Por favor, insira um número decimal válido e maior que zero";
        return;
    };

    const numeroRomanos = [
        { valor: 1000, simbolo: 'M' },
        { valor: 900, simbolo: 'CM' },
        { valor: 500, simbolo: 'D' },
        { valor: 400, simbolo: 'CD' },
        { valor: 100, simbolo: 'C' },
        { valor: 90, simbolo: 'XC' },
        { valor: 50, simbolo: 'L' },
        { valor: 40, simbolo: 'XL' },
        { valor: 10, simbolo: 'X' },
        { valor: 9, simbolo: 'IX' },
        { valor: 5, simbolo: 'V' },
        { valor: 4, simbolo: 'IV' },
        { valor: 1, simbolo: 'I' }
    ]
    let numeroRomano = '';
    let numero = numeroEntrada;
    numeroRomanos.forEach((item) => {
        while (numero >= item.valor) {
            numeroRomano += item.simbolo;
            numero -= item.valor;
        }
    });

    resultadoDiv.value = numeroRomano
}

function converterParaDecimal() {
    const numeroEntrada = document.getElementById('numeroEntrada').value.toUpperCase();
    const resultadoDiv = document.getElementById('numeroSaida');
    const numerosRomanos = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    }

    let numeroDecimal = 0;
    let i = 0;

    while (i < numeroEntrada.length) {
        if (i + 1 < numeroEntrada.length && numerosRomanos[numeroEntrada.substring(i, i + 2)]) {
            numeroDecimal += numerosRomanos[numeroEntrada.substring(i, i + 2)];
            i += 2;
        } else {
            numeroDecimal += numerosRomanos[numeroEntrada[i]];
            i += 1;
        }
    }

    if (numeroDecimal === 0 || isNaN(numeroDecimal)) {
        resultadoDiv.value = "Por favor, insira um número romano válido";
    } else {
        resultadoDiv.value = numeroDecimal;
    }
}

function mostrarDica() {
    document.getElementById('modalDica').style.display = 'block';
}

function fecharDica() {
    document.getElementById('modalDica').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('modalDica');
    if (event.target == modal) {
        modal.style.display = 'none';
    };
};