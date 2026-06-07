function converterHorasEmMinutos(horas) {
    let minutos = horas * 60;
    return `${horas} horas equivale a ${minutos} em minutos.`;
}

let minutosDe3Horas = converterHorasEmMinutos(3);

console.log(minutosDe3Horas)