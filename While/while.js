let contador = 1;

while (contador <= 5) {
    console.log("Contagem atual: " + contador);
    contador++;
}

let contador_2 = 1;
while (true) {
    console.log("While infinito: *** " + contador_2 + " ***");
    contador_2++;
    if (contador_2 > 5) {
        break;
    };
}

function condicaoDeParada(valor) {
    return valor <= 10;
}
let contador_3 = 0;
while (condicaoDeParada(contador_3)) {
    console.log("While com uma função de verificação " + contador_3);
    contador_3 += 2;
}
console.log('Contagem finalizada.')

let contador_4 = 5;
while (contador_4) {
    console.log("contador condição inversa: " + contador_4);
    contador_4--;
}
console.log("Contagem finalizada.");

let numero = 0;
let limite = 10;
while (numero < limite && numero % 2 === 0) {
    console.log("While com múltiplas condições: " + numero);
    numero += 2;
}
console.log("Contagem finalizada.");
