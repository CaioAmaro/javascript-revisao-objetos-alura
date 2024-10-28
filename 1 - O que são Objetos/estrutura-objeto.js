const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '131231231232',
    turma: 'Javascript'
};

console.log(estudante.nome);
console.log(`O nome de estudante é ${estudante.nome}`);
console.log(
    `O três primeiros números do CPF são ${estudante.cpf.substring(0,3)}`
);
