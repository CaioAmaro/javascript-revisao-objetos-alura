// 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

//     titulo (string): título do livro.
//     autor (string): nome do autor do livro.
//     anoPublicacao (number): ano de publicação do livro.
//     genero (string): gênero do livro.

// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

// const livro = {
//     titulo: 'Game Of Thrones',
//     autor: 'Gagamel',
//     anoPublicacao: '24/01/1994',
//     genero: 'Ficção'
// }

// console.log(`
//     Titulo: ${livro.titulo}
//     Autor: ${livro.autor}
//     Ano de Publicação: ${livro.anoPublicacao}
//     Gênero: ${livro.genero}
//     `
// );

//2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Game Of Thrones',
//     autor: 'Gagamel',
//     anoPublicacao: 2000,
//     genero: 'Ficção'
// }

// livro.idadePublicao = anoAtual - livro.anoPublicacao;

// const mostrarDetalhes = `O livro tem ${livro.idadePublicao} anos, desde sua publicação`;

// console.log(mostrarDetalhes);

//3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Game Of Thrones',
//     autor: 'Gagamel',
//     anoPublicacao: 2000,
//     genero: 'Ficção',
//     idadePublicacao: anoAtual - 2000
// }

// console.log(`
//     Titulo: ${livro['titulo']}
//     Autor: ${livro['autor']}
//     Ano de Publicação: ${livro['anoPublicacao']}
//     Idade de Publicação: ${livro['idadePublicacao']}
//     Gênero: ${livro['genero']}
//     `);

//4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

// No final do arquivo livro.js, adicione uma avaliação ao objeto.

// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Game Of Thrones',
//     autor: 'Gagamel',
//     anoPublicacao: 2000,
//     genero: 'Ficção',
//     idadePublicacao: anoAtual - 2000
// }

// livro.avaliacao = null;
// console.log(livro);

// function avaliarLivro(livro, notaAvaliacao){
//     if(livro.avaliacao === null){
//         livro.avaliacao = notaAvaliacao;
//         console.log('Livro Avaliado com sucesso.');
//     }else{
//         console.log('O livro ja foi avaliado anteriormente');
//     }
// }

// avaliarLivro(livro,10);
// console.log(livro);

// avaliarLivro(livro,9.3);
// console.log(livro);


//5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".

// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Game Of Thrones',
//     autor: 'Gagamel',
//     anoPublicacao: 2000,
//     genero: 'Ficção',
//     idadePublicacao: anoAtual - 2000
// }

// console.log(livro)
// livro.genero = 'Aventura';
// console.log(livro)

// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

// const anoAtual = new Date().getFullYear();

// const livro = {
//     titulo: 'Game Of Thrones',
//     autor: 'Gagamel',
//     anoPublicacao: 2000,
//     genero: 'Ficção',
//     idadePublicacao: anoAtual - 2000,
//     avaliacao: 3
// }

// console.log(livro);
// delete livro.avaliacao;
// console.log(livro);



