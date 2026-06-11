const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function jogadaComputador() {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const indice = Math.floor(Math.random() * 3);
    return escolhas[indice];
}

function determinarVencedor(jogadaUsuario, jogadaPc) {
    if (jogadaUsuario === jogadaPc) {
        return 'empate';
    };

    if ((jogadaUsuario === 'pedra' && jogadaPc === 'tesoura') ||
        (jogadaUsuario === 'tesoura' && jogadaPc === 'papel') ||
        (jogadaUsuario === 'papel' && jogadaPc === 'pedra')) {
        return 'Você venceu!';
    }

    return 'Computador venceu!';
}

function jogar() {
    readline.question('Escolha pedra, papel ou tesoura (digite "sair" para encerrar): ', jogadaUsuario => {
        jogadaUsuario = jogadaUsuario.toLowerCase();
        if (jogadaUsuario === 'sair') {
            console.log('Jogo encerrado.');
            readline.close();
            return;
        }
        const jogadaPc = jogadaComputador();
        console.log(`Computador escolheu: ${jogadaPc}`);
        console.log(determinarVencedor(jogadaUsuario, jogadaPc));
        jogar();
    })
}

jogar();