const readline = require('readline');
let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let candidatos = [['Candidato 1', 0], ['Candidato 2', 0], ['Candidato 3', 0], ['Votos Nulos', 0]];
function exibirCandidatos() {
    console.log('Vote nos candidatos abaixo:')
    console.log(`1- ${candidatos[0][0]}`);
    console.log(`2- ${candidatos[1][0]}`);
    console.log(`3- ${candidatos[2][0]}`);
    console.log(`4- Voto nulo`);
    console.log(`5- Encerrar votação e mostrar resultados`);
    coletarVoto()
};

function exibirResultados() {
    console.log('\nResultados da votação:')
    for (let i = 0; i < candidatos.length; i++) {
        console.log(`${candidatos[i][0]}: ${candidatos[i][1]}`)
    }

    let maxVoto = 0;
    let vencedor = 0;
    for (let i = 0; i < 3; i++) {
        if (candidatos[i][1] > maxVoto) {
            maxVoto = candidatos[i][1];
            vencedor = i;
        } else if (maxVoto === 0) {
            vencedor = 0;
        } else if (candidatos[i][1] === maxVoto) {
            vencedor = -1
        }
    }

    if (vencedor >= 1) {
        console.log(`\nO vencedor é o candidato ${candidatos[vencedor][0]} com ${maxVoto} votos.`)
    } else if (vencedor === -1) {
        console.log('Empate entre os candidatos.')
    } else {
        console.log('Não houve vencedores.');
    }

}

function coletarVoto() {
    r1.question('Digite um número de voto: ', voto => {
        voto = parseInt(voto - 1)
        switch (voto) {
            case 0:
                candidatos[0][1] += 1;
                coletarVoto();
                break;
            case 1:
                candidatos[1][1] += 1;
                coletarVoto();
                break;
            case 2:
                candidatos[2][1] += 1;
                coletarVoto();
                break;
            case 3:
                candidatos[3][1] += 1;
                coletarVoto();
                break;
            case 4:
                exibirResultados();
                r1.close();
                break;
            default:
                console.log('Você digitou algo incorreto, verifique por favor.');
                coletarVoto();
                break;
        }
    })
}

exibirCandidatos()