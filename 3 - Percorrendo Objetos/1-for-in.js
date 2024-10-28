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

for (let chave in estudante){
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo != 'function'){
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`;
        console.log(texto);
    }
};
