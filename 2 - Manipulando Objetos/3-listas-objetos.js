const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '741.420.122-54',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['+55 (92) 99432-2932', '+55 (47) 99334-2345'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
};

estudante.enderecos.push({
    rua: 'Rua Saia Branca',
    numero: '123',
    complemento: ''
});

// console.log(estudante.enderecos);
// console.log(estudante.enderecos[0]);

const listaEnderecosComComplemento = estudante.enderecos.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);