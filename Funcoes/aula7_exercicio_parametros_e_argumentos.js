function formatarEndereco(rua, numero, bairro, cidade, estado) {
    return `Rua: "${rua}", Número: "${numero}", Bairro: "${bairro}", Cidade: "${cidade}", Estado: "${estado}" `
}

let endereco1 = formatarEndereco('Avenida Brasil', '1000', 'Jardim Brasil', 'Belo Horizonte', 'MG')

console.log(endereco1);