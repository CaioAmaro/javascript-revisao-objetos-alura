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
    },
    {
        rua: 'Rua Saia Branca',
        numero: '123',
        complemento: ''
    }]
};

function exibirTelefones(telefone1, telefone2){
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);