const sistemaDeNotificacoes = (function () {

    let notificacoes = [];
    function registrar(mensagem) {
        notificacoes.push(mensagem);
        console.log(`Notificação registrada: "${mensagem}"`);
    }

    function exibir() {
        if (notificacoes.length === 0) {
            console.log("Não há notificações.");
            return;
        }

        console.log("Todas as notificações")
        notificacoes.forEach((mensagem, index) => {
            console.log(`${index + 1}: ${mensagem}`);
        });
    }
    return {
        registrar,
        exibir
    }

})();

sistemaDeNotificacoes.registrar("Bem-vindo ao sistema!");
sistemaDeNotificacoes.registrar("Você tem uma nova mensagem.");
sistemaDeNotificacoes.exibir();