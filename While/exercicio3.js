let contador = 1;
let acumulador = 0;

while (contador <= 100) {
    if (contador % 2 === 0) {
        console.log(`Contagem somátoria atual: ${acumulador}`)
        acumulador += contador;
    }
    contador++;
}
console.log('contagem finalizada')