const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '741.420.122-54',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['+55 (92) 99432-2932', '+55 (47) 99334-2345'],
    media: 7.5,
    estaAprovado: function (mediaBase){
        return this.media >= mediaBase ? true : false;
    }
};

console.log(estudante.estaAprovado(7));