//LISTA DE DESAFIOS

//1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:
// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.
// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.

// const pessoa = {
//     nome: 'Brunna',
//     idade: 24,
//     solteiro: false,
//     hobbies: ['Cozinhar', 'Desenhar', 'Passear']
// };

// function mostrarInfoPessoa(obj){
//     console.log(`
//         Nome: ${obj.nome}
//         Idade: ${obj.idade}
//         Solteiro: ${obj.solteiro}
//         Hobbies: ${obj.hobbies}
//         `)
// }

// mostrarInfoPessoa(pessoa);

//2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.

// Preencha as subpropriedades do objeto endereco com valores fictícios.

// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

// const pessoa = {
//     nome: 'Brunna',
//     idade: 24,
//     solteiro: false,
//     hobbies: ['Cozinhar', 'Desenhar', 'Passear'],
//     endereco: {
//         rua: 'Rua Xavier',
//         cidade: 'Blumenau',
//         estado: 'Santa Catarina'
//     }
// };

// function mostrarInfoPessoa(obj){
//     console.log(`
//         Nome: ${obj.nome}
//         Idade: ${obj.idade}
//         Solteiro: ${obj.solteiro}
//         Hobbies: ${obj.hobbies}
//         Endereço: ${obj.endereco.rua}, ${obj.endereco.cidade}, ${obj.endereco.estado}
//         `)
// }

// mostrarInfoPessoa(pessoa);


//3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.

// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.

// const pessoas = [
//     {
//         nome: 'Caio',
//         idade: 24,
//         cidade: 'Blumenau'
//     },
//     {
//         nome: 'Brunna',
//         idade: 24,
//         cidade: 'Blumenau'
//     },
//     {
//         nome: 'Israel',
//         idade: 50,
//         cidade: 'Manaus'
//     }
// ]

// function mostrarListaPessoas(lista){
//     let i = 0;
//     for(pessoa of lista){
//         i++;
//         console.log(`
//             Pessoa[${i}]
//             Nome: ${pessoa.nome}
//             Idade: ${pessoa.idade}
//             Cidade: ${pessoa.cidade}
//             `);
//     }
// }

// function adicionarPessoa(lista,nome, idade, cidade){
//     const verificacao = lista.filter((pessoa) => pessoa.nome === nome);
//     if(verificacao.length === 0){
//         lista.push({
//             nome: nome,
//             idade: idade,
//             cidade: cidade
//         });
//         console.log(`Pessoa Cadastrada com Sucesso!`);
//     }else{
//         console.log(`Operação não efetivada. (Motivo: Nome já existente.)`)
//     }
// }

// function filtroPorCidade (lista, cidade){
//     const result = lista.filter((pessoa) => {
//         return pessoa.cidade === cidade;
//     })

//     if(result.length == 0){
//         console.log('Nenhum dado foi encontrado.')
//     }else{
//         console.log(`Foram encontrados [${result.length}] casos.`)
//         for(let pessoa of result){
//             console.log(`
//                 Nome: ${pessoa.nome}
//                 Idade: ${pessoa.idade}
//                 Cidade: ${pessoa.cidade}
//             `);
//         }
//     }
// }

// mostrarListaPessoas(pessoas);
// adicionarPessoa(pessoas, 'Cfaio', 24, 'Florianopolis');
// adicionarPessoa(pessoas, 'Cfaio', 24, 'Florianopolis');
// mostrarListaPessoas(pessoas);

// filtroPorCidade(pessoas,'Manaus');
// filtroPorCidade(pessoas,'Florianopolis');
// filtroPorCidade(pessoas,'Blumenau');

//4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.

// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.

// const calculadora = {
//     soma: function (number1, number2){
//         return number1+number2;
//     },
//     subtracao: function(number1, number2){
//         return number2-number1;
//     },
//     multiplicacao: function(number1, number2){
//         return number1*number2;
//     },
//     divisao: function(number1, number2){
//         if(number1 == 0 || number2 == 0){
//             console.log('Erro: Divisão por 0');
//             return -1;
//         }else{
//             return number1/number2;
//         }
//     },
//     calcularMedia: function (lista){
//         return lista.reduce((acumulador, item) => acumulador += item, 0) / lista.length;
//     }
// };

// const numeros = [7, 7, 8];

// console.log(calculadora.soma(1,2));
// console.log(calculadora.subtracao(1,2));
// console.log(calculadora.multiplicacao(5,5));
// console.log(calculadora.divisao(5,0));
// console.log(calculadora.calcularMedia(numeros));

//5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.

// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).

// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.

// const contaBancaria = {
//     titular: 'Caio',
//     saldo: 100,
//     depositar: function (quantia){
//         this.saldo += quantia;
//     },
//     sacar: function (quantia){
//         if(quantia > this.saldo){
//             return `Erro: Saldo insuficiente.`;
//         }else{
//             this.saldo -= quantia;
//         }
//     }
// }

// const cliente = {
//     nome: 'Caio',
//     conta: contaBancaria
// }

// function mostrarSaldo(cliente){
//     console.log(`
//         Nome: ${cliente.nome}
//         Saldo: R$ ${cliente.conta.saldo}
//         `);
// }

// console.log(cliente);
// mostrarSaldo(cliente);
// contaBancaria.sacar(20);
// mostrarSaldo(cliente);
// contaBancaria.depositar(57);
// mostrarSaldo(cliente);
