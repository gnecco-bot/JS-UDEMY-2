// Immediately invoked function expression
(function () {
    let contador = 0;
    function incrementar() {
        contador += 1;
        console.log(contador);
    }
    function resetar() {
        contador = 0;
        console.log(`Contador resetado.`);
    }
    incrementar();
    incrementar();
    incrementar();
    resetar();
    incrementar();
    incrementar();
    incrementar();
    incrementar();
    incrementar();
})();

const gerenciadorDeTarefas = (function () {
    let tarefas = [];
    function adicionar(tarefa) {
        tarefas.push(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada.`);
    }

    function listar() {
        if (tarefas.length === 0) {
            console.log("Não há tarefas.");
            return;
        }
        console.log("Tarefas:");
        tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}: ${tarefa}`);
        });
    }
    return {
        adicionar,
        listar,
    }
})();

gerenciadorDeTarefas.adicionar("Comprar leite");
gerenciadorDeTarefas.adicionar("Pagar as contas");
gerenciadorDeTarefas.adicionar("Aprender HTML");
gerenciadorDeTarefas.listar();