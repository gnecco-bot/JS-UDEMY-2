function saudacaoPersonalizada(nome, mensagem) {
    return `${mensagem}, ${nome}`;
}

let saudacaoParaAlice = saudacaoPersonalizada('Alice', 'Bom dia');
let saudacaoParaBob = saudacaoPersonalizada('Bob', 'Boa noite');


console.log(saudacaoParaAlice);
console.log(saudacaoParaBob);

function calcularDesconto(valorTotal, porcentagemDesconto) {
    let valorDesconto = (valorTotal * porcentagemDesconto) / 100;
    let valorFinal = valorTotal - valorDesconto;
    return valorFinal;
}

let valorCompra1 = calcularDesconto(200, 10);
let valorCompra2 = calcularDesconto(853, 18);

console.log(valorCompra1);
console.log(valorCompra2);