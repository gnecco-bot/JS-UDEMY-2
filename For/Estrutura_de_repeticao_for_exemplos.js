for (let i = 0; i < 10; i++) {
    console.log(i);
}

const frutas = ['maçã', 'banana', 'laranja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

const cores = ['azul', 'vermelho', 'verde'];

for (const cor of cores) {
    console.log(cor);
}

const pessoa = {
    nome: 'João',
    idade: '20',
    cidade: 'São paulo',
};

for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(`Loop For com Break ${i}`);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
    console.log(`Loop For com Continue ${i}`);
}