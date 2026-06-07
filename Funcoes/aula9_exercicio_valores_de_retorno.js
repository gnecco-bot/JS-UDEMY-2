const anoBissexto = function (ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return `O ano mencionado ${ano} é bissexto`
    } else {
        return `O ano mencionado ${ano} não é bissexto.`
    }

    // if (ano % 4 === 0) {
    //     if (ano % 100 === 0) {
    //         return `O ano mencionado ${ano} não é bissexto mesmo sendo divisivel por 4.`
    //     }
    //     return `O ano menciona ${ano} é bissexto.`
    // } else {
    //     return `O ano mencionado ${ano} não é bissexto.`
    // }
}

let ano1 = anoBissexto(12)
let ano2 = anoBissexto(400)
let ano3 = anoBissexto(2020)
let ano4 = anoBissexto(2021)
let ano5 = anoBissexto(200)
let ano6 = anoBissexto(600)
console.log(ano1)
console.log(ano2)
console.log(ano3)
console.log(ano4)
console.log(ano5)
console.log(ano6)