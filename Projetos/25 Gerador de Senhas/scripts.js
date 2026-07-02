document.addEventListener('DOMContentLoaded', () => {
    const botaoGerar = document.getElementById('gerar');
    const divSenha = document.getElementById('senha');
    botaoGerar.addEventListener('click', () => {
        const comprimento = parseInt(document.getElementById('comprimento').value);
        const incluirMaiusculas = document.getElementById('incluir-maiusculas').checked;
        const incluirEspeciais = document.getElementById('incluir-especiais').checked;
        const incluirNumeros = document.getElementById('incluir-numeros').checked;
        const letrasMinusculas = 'abcdefghijklmnoprstuvwxyz';
        const letrasMaiusculas = 'ABCDEGHIJKLMNOPQRSTUVWXYZ';
        const caracteresEspeciais = '!@#$%^&*()-_=+';
        const numeros = '0123456789';
        let conjuntoCaracteres = letrasMinusculas;
        if (incluirMaiusculas) conjuntoCaracteres += letrasMaiusculas;
        if (incluirEspeciais) conjuntoCaracteres += caracteresEspeciais;
        if (incluirNumeros) conjuntoCaracteres += numeros;
        if (conjuntoCaracteres.length === 0) {
            divSenha.innerHTML = 'Por favor, selecione pelo menos um critério para gerar a senha';
            return;
        }
        let senha = '';
        for (let i = 0; i < comprimento; i++) {
            const indiceAleatorio = Math.floor(Math.random() * conjuntoCaracteres.length);
            senha += conjuntoCaracteres[indiceAleatorio];
        }
        if (incluirNumeros && !/\d/.test(senha)) {
            const indiceAleatorio = Math.floor(Math.random() * senha.length);
            const indiceDigitoAleatorio = Math.floor(Math.random() * numeros.length);
            senha = senha.substring(0, indiceAleatorio) + numeros[indiceDigitoAleatorio];
        }
        divSenha.innerHTML = senha;
    });
});