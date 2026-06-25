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
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('atm-container').style.display = 'none';
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
}

function depositar() {
    var usaurio = document.getElementById('usuario').value;
    var valor = parseFloat(document.getElementById('valor-deposito').value);

}