let convidados = [];

function adicionarConvidado(convidado) {
    convidados.push(convidado);
    console.log(`Convidado "${convidado}" adicionado com sucesso`);
};

function removerConvidado(indice) {
    console.log(`Convidado "${convidados[indice - 1]}" removido com sucesso.`)
    convidados.splice(indice - 1, 1);
    exibirConvidado();
};

function verificarConvidado(nome) {
    verificandoConvidado = convidados.includes(nome)
    if (verificandoConvidado) {
        console.log(`Convidado "${nome}" mencionado existe na lista de convidados`);
    } else {
        console.log(`Convidado "${nome}" não existe na lista de convidados.`);
    };
}

function totalConvidado() {
    let totalConvidados = convidados.length;
    console.log(`Total de convidados são: ${totalConvidados}`);
};

function alterarConvidado(indice, alterandoConvidado) {
    indice = parseInt(indice - 1);
    convidados[indice] = alterandoConvidado;
    console.log(`Convidado alterado para ${convidados[indice]}`)
    exibirConvidado();
}

function exibirConvidado() {
    console.log('Convidados:');
    convidados.sort()
    convidados.forEach((tarefa, index) => {
        console.log(`${index + 1}: ${tarefa}`);
    });
    convidados.sort()
}

adicionarConvidado('jonas')
adicionarConvidado('anderson')
adicionarConvidado('luan')
adicionarConvidado('ferdinando')
adicionarConvidado('miguel')
adicionarConvidado('camila')
adicionarConvidado('artur')
exibirConvidado()
alterarConvidado(2, 'joana');
totalConvidado()
verificarConvidado('jonas')
verificarConvidado('jefersson')
removerConvidado(2)