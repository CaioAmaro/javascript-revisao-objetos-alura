const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '741.420.122-54',
    turma: 'Javascript'
};

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
};

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
console.log(exibeInfoEstudante(estudante, 'idade'));