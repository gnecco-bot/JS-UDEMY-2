class Livro {
    #copias
    #valorInicial
    constructor(titulo, autor, copias) {
        this.titulo = titulo;
        this.autor = autor;
        this.#copias = copias;
        this.#valorInicial = copias
    }

    emprestar() {
        if (this.#verificarDisponibilidade()) {
            this.#copias--;
            console.log(`Livro "${this.titulo}" emprestado com sucesso`);
        } else {
            console.log(`Infelizmente se esgotou o livro "${this.titulo}" do autor "${this.autor}"`);
        }
    }

    devolver() {
        if (this.#copias < this.#valorInicial) {
            this.#copias++;
            console.log(`Livro "${this.titulo}" devolvido`)
        } else {
            console.log('Nenhum livro foi emprestado.')
        }
    }

    #verificarDisponibilidade() {
        return this.#copias > 0;
    }

}

const livro1 = new Livro('Madmax', 'Douglas', 3);
livro1.devolver();
livro1.emprestar();
livro1.devolver();
livro1.devolver();
livro1.emprestar();
livro1.emprestar();
livro1.emprestar();
livro1.emprestar();
livro1.devolver();
livro1.emprestar();