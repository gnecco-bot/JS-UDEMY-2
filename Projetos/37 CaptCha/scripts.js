window.onload = function () {
    desenharCaptcha();
}

function desenharCaptcha() {
    const canvas = document.getElementById('canvas-captcha');
    const contexto = canvas.getContext('2d');
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let textoCaptcha = '';
    for (let i = 0; i < 6; i++) {
        textoCaptcha += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    const fontes = ['50px Arial', '50px Tahoma', '50px Verdana', '45px Courier New', '50px Georgia'];
    const fonteSelecionada = fontes[Math.floor(Math.random() * fontes.length)]
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.fillStyle = '#0a2933';
    contexto.fillRect(0, 0, canvas.width, canvas.height);
    const angle = Math.random() * 0.2 - 0.1;
    contexto.translate(canvas.width / 2, canvas.height / 2);
    contexto.rotate(angle);
    contexto.fillStyle = '#ffffff';
    contexto.font = fonteSelecionada;
    contexto.textAlign = 'center';
    contexto.fillText(textoCaptcha, 0, 15);
    contexto.rotate(-angle);
    contexto.translate(-canvas.width / 2, -canvas.height / 2);
    if (Math.random() > 0.5) {
        contexto.beginPath();
        contexto.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        contexto.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        contexto.strokeStyle = '#FF0000';
        contexto.lineWidth = 2;
        contexto.stroke();
    }
    canvas.setAttribute('data-captcha', textoCaptcha);
}

function verificarCaptcha() {
    const entrada = document.getElementById('entrada-captcha').value;
    const captchaGerado = document.getElementById('canvas-captcha').getAttribute('data-captcha');
    const status = document.getElementById('status');
    if (entrada === captchaGerado) {
        window.location.href = 'sucesso.html';
    } else {
        status.innerHTML = 'CAPTCHA incorreto. Tente novamente.'
        status.style.color = 'red'
        desenharCaptcha();
    }
}

document.addEventListener('keydown', function (event) {
    const tecla = event.key;
    if (tecla === 'Enter') {
        verificarCaptcha();
    }
})