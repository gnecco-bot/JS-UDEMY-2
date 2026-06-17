class ContaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
    };

    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para sacar ${valor}. Saldo Atual: ${this.saldo}`);
        } else {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);

        };
    };

    verificarSaldo() {
        console.log(`Saldo atual: ${this.saldo}`);
    }
}

const minhaConta = new ContaBancaria('João', 1000);
minhaConta.depositar(200);
minhaConta.sacar(500);
minhaConta.sacar(1500);
minhaConta.verificarSaldo();