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

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if(!chavesObjeto.includes('enderecos')){
    console.error('É necessário ter um endereço cadastrado.');
}