document.addEventListener('DOMContentLoaded', () => {
    const abrirModalCadastroBtn = document.getElementById('abrirModalCadastroBtn');
    const abrirModalSurpresinhaBtn = document.getElementById('abrirModalSurpresinhaBtn');
    const modalCadastro = document.getElementById('modalCadastro');
    const modalSurpresinha = document.getElementById('modalSurpresinha');
    const fecharModalSpans = document.querySelectorAll('.fechar');
    const formularioJogo = document.getElementById('formularioJogo');
    const quantidadeNumeros = document.getElementById('quantidadeNumeros');
    const quantidadeNumerosSurpresinha = document.getElementById('quantidadeNumerosSurpresinha');
    const numerosCampos = document.getElementById('numerosCampos');
    const listaJogos = document.getElementById('listaJogos');
    const botaoConferir = document.getElementById('botaoConferir');
    const salvarSurpresinhaBtn = document.getElementById('salvarSurpresinhaBtn');
    const jogoSurpresinha = document.getElementById('jogoSurpresinha');

    const conferirNumerosInputs = Array.from(
        { length: 15 },
        (_, i) => {
            return document.getElementById(`confereNum${i + 1}`);

        }
    );

    const LOTOFACIL_STORAGE_KEY = 'jogos_lotofacil';

    let jogos = JSON.parse(localStorage.getItem(LOTOFACIL_STORAGE_KEY)) || [];
    let numerosGeradosSurpresinha = [];

    abrirModalCadastroBtn.onclick = () => {
        gerarCamposNumeros(15);
        modalCadastro.style.display = 'block';
    };

    quantidadeNumeros.oninput = () => {
        gerarCamposNumeros(parseInt(quantidadeNumeros.value));
    };

    abrirModalSurpresinhaBtn.onclick = () => {
        modalSurpresinha.style.display = 'block';
        atualizarSurpresinha();
    };

    quantidadeNumerosSurpresinha.oninput = () => {
        atualizarSurpresinha();
    };

    fecharModalSpans.forEach(span => {
        span.onclick = () => {
            modalCadastro.style.display = 'none';
            modalSurpresinha.style.display = 'none'
        };
    });

    window.onclick = (event) => {
        if (event.target === modalCadastro) {
            modalCadastro.style.display = 'none';
        };
        if (event.target === modalSurpresinha) {
            modalSurpresinha.style.display = 'none';
        };
    };

    formularioJogo.onsubmit = (event) => {
        event.preventDefault();
        const quantidade = parseInt(quantidadeNumeros.value);
        const novoJogo = [];
        for (let i = 1; i <= quantidade; i++) {
            novoJogo.push(parseInt(document.getElementById(`num${i}`).value));
        };
        jogos.push(novoJogo);
        localStorage.setItem(LOTOFACIL_STORAGE_KEY, JSON.stringify(jogos));
        exibirJogos();
        modalCadastro.style.display = 'none';
        formularioJogo.reset();
    };

    const exibirJogos = (numerosParaConferir = []) => {
        listaJogos.innerHTML = '';
        jogos.forEach((jogo, index) => {
            const li = document.createElement('li');
            let acertos = 0;
            jogo.forEach(numero => {
                const span = document.createElement('span');
                span.textContent = numero;
                if (numerosParaConferir.includes(numero)) {
                    span.classList.add('correto');
                    acertos++;
                }
                li.appendChild(span);
            });
            const resultadoSpan = document.createElement('span');
            resultadoSpan.textContent = `Acertos: ${acertos}`;
            li.appendChild(resultadoSpan);
            if (acertos >= 11) {
                li.classList.add('todos-acertos');
            } else if (acertos >= 6) {
                li.classList.add('acertos-medianos');
            } else {
                li.style.backgroundColor = '#ffffff';
            }
            const botaoExcluir = document.createElement('button');
            botaoExcluir.textContent = 'Excluir';
            botaoExcluir.onclick = () => {
                jogos.splice(index, 1);
                localStorage.setItem(LOTOFACIL_STORAGE_KEY, JSON.stringify(jogos));
                exibirJogos();
            };
            li.appendChild(botaoExcluir);
            listaJogos.appendChild(li);
        });
    };

    botaoConferir.onclick = () => {
        const numerosParaConferir = conferirNumerosInputs.map(input => parseInt(input.value));
        exibirJogos(numerosParaConferir);
    };

    salvarSurpresinhaBtn.onclick = () => {
        jogos.push(numerosGeradosSurpresinha);
        localStorage.setItem(LOTOFACIL_STORAGE_KEY, JSON.stringify(jogos));
        exibirJogos()
        modalSurpresinha.style.display = 'none'
    }

    const atualizarSurpresinha = () => {
        const quantidade = parseInt(quantidadeNumerosSurpresinha.value);
        numerosGeradosSurpresinha = gerarNumerosAleatorios(quantidade);
        jogoSurpresinha.textContent = numerosGeradosSurpresinha.sort((a, b) => a - b).join(', ');
    };

    const gerarNumerosAleatorios = (quantidade) => {
        const numeros = [];
        while (numeros.length < quantidade) {
            const numero = Math.floor(Math.random() * 25) + 1;
            if (!numeros.includes(numero)) {
                numeros.push(numero);
            }
        }
        return numeros;
    }

    const gerarCamposNumeros = (quantidade) => {
        numerosCampos.innerHTML = '';
        for (let i = 1; i <= quantidade; i++) {
            const label = document.createElement('label');
            label.setAttribute('for', `num${i}`);
            label.textContent = `Número ${i}:`;
            const input = document.createElement('input');
            input.setAttribute('type', 'number');
            input.setAttribute('id', `num${i}`);
            input.setAttribute('min', '1');
            input.setAttribute('max', '25');
            input.required = true;
            numerosCampos.appendChild(label);
            numerosCampos.appendChild(input);
        }
    };
    exibirJogos();
});