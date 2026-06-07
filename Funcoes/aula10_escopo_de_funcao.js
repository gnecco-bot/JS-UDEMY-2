let nome = "Maria";

function saudar() {
    let mensagem = "Olá, ";
    return mensagem + nome;
}

console.log(saudar())

function criaContador() {
    let contador = 0;
    function incrementar() {
        contador++;
        console.log(contador);
    }
    return incrementar;
}

const meuContador = criaContador();
const meuContador2 = criaContador();
const meuContador3 = criaContador();
meuContador();
meuContador();
meuContador();
meuContador();
meuContador2();
meuContador2();
meuContador3();