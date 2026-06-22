document.getElementById('mudarCor').addEventListener('click', function () {
    const corAleatoria = Math.floor(Math.random() * 16060345).toString(16);
    document.body.style.background = "#" + corAleatoria;
});