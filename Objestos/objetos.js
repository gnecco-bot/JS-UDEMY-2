const pessoa = {
    nome: "joão",
    idade: 30,
}

pessoa.profissao = "Desenvolvedor WEB";

console.log(pessoa);

/* ================================== */

const pessoa2 = {
    nome: 'joao',
    idade: 30,
    profissao: 'desenvolvedor web',
};

delete pessoa2.idade;
console.log(pessoa2);

/* ================================== */

console.log(pessoa2.nome);
console.log(pessoa2['profissao']);
pessoa2.nome = "maria";
console.log(pessoa2.nome);

/* ================================== */

const obj1 = { a: 1, b: 2 };

const obj2 = { b: 3, c: 4 };

const combinado = Object.assign({}, obj1, obj2);
console.log(combinado);

const combinadoSpread = { ...obj1, ...obj2 };
console.log(combinadoSpread)

/* ================================== */

const perfilUsuario = {
    usuario: 'Ana',
    anos: 25,
    funcao: 'Designer gráfico',
};

for (const proriedade of Object.keys(perfilUsuario)) {
    console.log(`${proriedade}: ${perfilUsuario[proriedade]}`);
}