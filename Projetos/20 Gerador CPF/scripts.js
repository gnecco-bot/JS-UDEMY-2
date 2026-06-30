function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarCPF() {
    let digitosCPF = Array.from({ length: 9 }, () => gerarNumeroAleatorio(0, 9));

    let soma = digitosCPF.reduce((acc, cur, idx) => {
        return acc + cur * (10 - idx);
    }, 0);

    let primeiroDigito = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    digitosCPF.push(primeiroDigito);

    soma = digitosCPF.reduce((acc, cur, idx) => {
        return acc + cur * (11 - idx);
    }, 0);

    let segundoDigito = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    digitosCPF.push(segundoDigito);

    return digitosCPF.join('');
};

function formarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

function principal() {
    const campoCPF = document.getElementById('cpf');
    const botaoGerarCPF = document.getElementById('gerar-cpf');
    botaoGerarCPF.addEventListener('click', () => {
        const novoCPF = gerarCPF();
        const cpfFormatado = formarCPF(novoCPF);
        campoCPF.value = cpfFormatado;
    });
}

document.addEventListener('DOMContentLoaded', principal);