function registrar() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    localStorage.setItem(usuario, JSON.stringify({ senha: senha, conta: Math.floor(Math.random() * 100000), saldo: 0, historico: [] }));
    alert('Usuário registrado com sucesso!');
}

function login() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var dadosUsuario = JSON.parse(localStorage.getItem(usuario));

    if (dadosUsuario && dadosUsuario.senha === senha) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('atm-container').style.display = 'block';
        document.getElementById('nome-usuario').innerHTML = usuario;
        document.getElementById('conta').innerHTML = dadosUsuario.conta;
        document.getElementById('saldo').innerHTML = formatarSaldo(dadosUsuario.saldo);
    } else {
        alert('Usuário ou senha inválidos.');
    };
};

function formatarSaldo(saldo) {
    return saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
};

function logout() {
    ocultarTelas();
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('atm-container').style.display = 'none';
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
}

function depositar() {
    var usuario = document.getElementById('usuario').value;
    var valor = parseFloat(document.getElementById('valor-deposito').value);
    var dadosUsuario = JSON.parse(localStorage.getItem(usuario));
    if (valor > 0 && !isNaN(valor)) {
        dadosUsuario.saldo += valor;
        dadosUsuario.historico.push({ tipo: 'Deposito', valor: valor });
        localStorage.setItem(usuario, JSON.stringify(dadosUsuario))
        document.getElementById('saldo').innerHTML = formatarSaldo(dadosUsuario.saldo);
        alert('Depósito realizado com sucesso!');
        exibirCaixaEletronico()
    } else {
        alert('Valor inválido.');
    }
}

function exibirDeposito() {
    ocultarTelas();
    document.getElementById('deposito-container').style.display = 'block';
}

function ocultarTelas() {
    document.getElementById('deposito-container').style.display = 'none';
    document.getElementById('saque-container').style.display = 'none';
    document.getElementById('historico-container').style.display = 'none';
}

function exibirCaixaEletronico() {
    ocultarTelas();
    document.getElementById('atm-container').style.display = 'block';
}

function exibirHistorico() {
    ocultarTelas();
    var usuario = document.getElementById('usuario').value;
    var dadosUsuario = JSON.parse(localStorage.getItem(usuario));
    var historico = dadosUsuario.historico;
    var historicoString = '';
    historico.forEach(function (transacao) {
        historicoString += transacao.tipo + ': R$ ' + formatarSaldo(transacao.valor) + '\n';
    });
    document.getElementById('historico-text').value = historicoString;
    document.getElementById('historico-container').style.display = 'block';
    console.log('cheguei aqui')
};

function exibirSaque() {
    ocultarTelas();
    document.getElementById('saque-container').style.display = 'block';
};

function sacar() {
    var usuario = document.getElementById('usuario').value;
    var valor = parseFloat(document.getElementById('valor-saque').value);
    var dadosUsuario = JSON.parse(localStorage.getItem(usuario));
    if (valor > 0 && !isNaN(valor) && valor <= dadosUsuario.saldo) {
        dadosUsuario.saldo -= valor;
        dadosUsuario.historico.push({ tipo: 'Saque', valor: valor });
        localStorage.setItem(usuario, JSON.stringify(dadosUsuario));
        document.getElementById('saldo').innerHTML = formatarSaldo(dadosUsuario.saldo);
        alert('Saque realizado com sucesso!')
        exibirCaixaEletronico();
    } else {
        alert('Valor inválido ou saldo insuficiente.');
    };
};