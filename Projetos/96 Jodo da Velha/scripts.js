let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorAtual = 'X';
let logoAtivo = true;
let pontuacaoJogador = 0;
let pontuacaoComputador = 0;
let pontuacaoEmpate = 0;
const COMBINACOES_VITORIA = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

function fazerJogada(indiceCelula) {
    if (!jogadorAtivo || tabuleiro[indiceCelula] !== '') return;
    tabuleiro[indiceCelula] = jogadorAtual;
    renderizarTabuleiro();
    if (verificarVitoria) {
        jogoAtivo = false;
        atualizarPontuacoes(jogadorAtual);
        setTimeout(() => {
            alert(`${jogadorAtual} venceu`)
            reiniciarJogo();
        }, 100)
        return;
    }
}


function atualizarPontuacoes(vencedor) {
    if (vencedor === 'empate') {
        pontuacaoEmpate++;

    } else if (vencedor == 'X') {
        pontuacaoJogador++;
    } else {
        pontuacaoComputador++
    }
    renderizarPontuacoes();
}

function renderizarPontuacoes() {
    document.getElementById('pontuacao-jogador').textContent = pontuacaoJogador;
    document.getElementById('pontuacao-computador').textContent = pontuacaoComputador;
    document.getElementById('pontuacao-empates').textContent = pontuacaoEmpates;
}

function verificarVitoria() {
    return verificarVencedor() !== null;
}

function verificarVencedor() {
    for (let combinacao of COMBINACOES_VITORIA) {
        const [a, b, c] = combinacao;
        if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[b] === tabuleiro[c]) {
            return tabuleiro[a];
        }
    }
    return null;
}

function renderizarTabuleiro() {
    for (let i = 0; i < tabuleiro.length; i++) {
        const celula = document.getElementsByClassName('celular')[i];
        celula.textContent = tabuleiro[i];
    }
}

function reiniciarJogo() {
    let tabuleiro = ['', '', '', '', '', '', '', '', ''];
    let jogadorAtual = 'X';
    let logoAtivo = true;
    renderizarTabuleiro();
}

renderizarPontuacoes();