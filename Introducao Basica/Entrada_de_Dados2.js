const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function fazerPerguntar(pergunta) {
    return new Promise((resolve) => {
        r1.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

async function coletarRespostas() {
    const nome = await fazerPerguntar('Qual seu nome? ');
    const corFavorita = await fazerPerguntar('Qual é a sua cor favorita? ');
    const animalFavorito = await fazerPerguntar('Qual é o seu animal favorito? ');
    const hobby = await fazerPerguntar('Qual seu hobbie? ');
    const pratoFavorito = await fazerPerguntar('Qual seu prato favorito? ');

    console.log(`\nAqui estão as suas respostas:
        Nome: ${nome}
        Cor favorita: ${corFavorita}
        Animal favorito: ${animalFavorito}
        Hobby: ${hobby}
        Prato favorito: ${pratoFavorito}
        `);

    r1.close();
}
coletarRespostas();