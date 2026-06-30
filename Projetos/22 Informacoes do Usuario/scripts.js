function obterInformacoesUsuario() {
    if (confirm('Deseja permitir que o site colete informações sobre você?')) {
        document.getElementById('informacoes').innerHTML = '';
        fetch('https://api.ipify.org?format=json')
            .then(resposta => {
                return resposta.json();
            })
            .then(dados => {
                const infoIP = `IP: ${dados.ip}\n`;
                obterLocalizacao(dados.ip, infoIP);
            })
            .catch(erro => {
                console.error('Erro ao obter o IP:', erro);
                document.getElementById('informacoes').innerText = 'Erro ao obter o IP.';
            })
    } else {
        document.getElementById('informacoes').innerText = 'Autorização negada pelo usuário.';
    };
};

function obterLocalizacao(ip, infoIP) {
    fetch(`https://ipapi.co/${ip}/json/`)
        .then(resposta => {
            return resposta.json();
        })
        .then(dadosLocal => {
            const localizacao = `Pais: ${dadosLocal.country_name}\nCidade: ${dadosLocal.city}\nRegião: ${dadosLocal.region}\n`;
            const infoUsuario = coletarInfoNavegador();
            document.getElementById('informacoes').innerText = infoIP + localizacao + infoUsuario;
        })
        .catch(erro => {
            console.error('Erro ao obter localização:', erro);
            document.getElementById('informacoes').innerText = infoIP + 'Erro ao obter localização.\n' + coletarInfoNavegador();
        })
}

function coletarInfoNavegador() {
    const tipoDispositivo = indentificarTipoDispostivo();
    const informacoesUsuario = {
        'Tipo de Dispositivo': tipoDispositivo,
        'Navegador': navigator.userAgent,
        'Plataforma': navigator.platform,
        'Lingua': navigator.language,
        'Conexao': navigator.connection ? navigator.connection.effectiveType : 'Não disponível'
    }
    return JSON.stringify(informacoesUsuario, null, 2);
}

function indentificarTipoDispostivo() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|kindle|silk|midp|pocket/i.test(userAgent)) {
        return 'Móvel';
    } else if (/tablet|ipad/i.test(userAgent)) {
        return 'Tablet';
    } else {
        return 'Desktop';
    }
};