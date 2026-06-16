const readline = require('readline');

r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let reservas = new Map()

function reservarSala() {
    r1.question('Nome do evento: ', (evento) => {
        r1.question('Sala dsejada: ', (sala) => {
            r1.question('Horário de reserva: ', (horario) => {
                if (!reservas.has(horario)) {
                    reservas.set(horario, [{ evento, sala }]);
                    console.log(`Reserva para "${evento}" na sala ${sala} às ${horario} efetuada com sucesso.`)
                } else {
                    const reservasHorario = reservas.get(horario);
                    const reservaExistente = reservasHorario.find(reserva => reserva.sala === sala);
                    if (!reservaExistente) {
                        reservasHorario.push({ evento, sala });
                        console.log(`Reserva para "${evento}" na sala ${sala} às ${horario} efetuada com sucesso.`)
                    } else {
                        console.log(`Já existe uma reserva para "${evento}" na sala ${sala} às ${hoario}`);
                    }
                }
                menu();
            })
        })
    })
}

function verificarDisponibilidade() {
    r1.question('Sala desejada: ', sala => {
        r1.question('Horário desejado: ', horario => {
            if (!reservas.has(horario)) {
                console.log(`A sala ${sala} está diponível às ${horario}.`);
            } else {
                const reservasHorario = reservas.get(horario);
                const reservaSala = reservasHorario.find(reserva => reserva.sala === sala);
                if (!reservaSala) {
                    console.log(`A sala ${sala} está disponível às ${horario}.`);
                } else {
                    console.log(`A sala ${sala} está ocupada às ${horario}.`)
                }
            }
            menu();
        })
    })
}

function cancelarReservar() {
    r1.question('Nome do evento a ser cancelado: ', evento => {
        let removido = false;
        reservas.forEach((reservasHorario, horario) => {
            const index = reservasHorario.findIndex(reserva => reserva.evento === evento);
            if (index !== -1) {
                reservasHorario.splice(index, 1);
                removido = true;
                console.log(`Reserva para "${evento}" cancelada.`);
                if (reservasHorario.length === 0) {
                    reservas.delete(horario);
                }
            }
        });
        if (!removido) {
            console.log(`Evento "${evento}" não encontrado.`);
        }
        menu();
    })
}

function exibirReservas() {
    console.log('Lista de reservas:');
    reservas.forEach((reservashorario, horario) => {
        reservashorario.forEach(reserva => {
            console.log(`Evento: ${reserva.evento}, Sala: ${reserva.sala}, Horário: ${horario}`);
        });
    });
    menu();
}

function menu() {
    console.log('\nDigite uma opção');
    console.log('1. Reservar Sala');
    console.log('2. Verificar Disponibilidade');
    console.log('3. Cancelar Reserva');
    console.log('4. Exibir Reservas');
    console.log('5. Sair.');

    r1.question('', opcao => {
        opcao = parseInt(opcao);
        switch (opcao) {
            case 1:
                reservarSala();
                break;
            case 2:
                verificarDisponibilidade();
                break;
            case 3:
                cancelarReservar();
                break;
            case 4:
                exibirReservas();
                break;
            case 5:
                console.log('Saindo do programa...')
                r1.close();
        }
    })
}

menu();