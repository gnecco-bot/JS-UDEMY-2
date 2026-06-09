function Relogio(horas, minutos, segundos) {
    this.horas = horas;
    this.minutos = minutos;
    this.segundos = segundos;

    this.ajustarTempo = function (horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    };

    this.adicionaMinutos = function (minutos) {
        this.minutos += minutos;
        while (this.minutos >= 60) {
            this.minutos -= 60;
            this.horas += 1;
        };
    };

    this.adicionarSegundos = function (segundos) {
        this.segundos += segundos;
        while (this.segundos >= 60) {
            this.segundos -= 60;
            this.adicionaMinutos(1);
        }
    };

    this.exibirTempo = function () {
        console.log(`${this.horas.toString().padStart(2, '0')}:${this.minutos.toString().padStart(2, '0')}:${this.segundos.toString().padStart(2, '0')}`)
    };
}

var meuRelogio = new Relogio(10, 45, 20);
meuRelogio.exibirTempo();
meuRelogio.adicionaMinutos(20);
meuRelogio.exibirTempo();
meuRelogio.adicionarSegundos(5003);
meuRelogio.exibirTempo();