//4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.
// Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

// a) Leia o conteúdo do arquivo animais.json.

// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

// d) Modifique o habitat de um animal existente no array de animais.

// e) Remova um animal do array de animais.

// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

// g) Imprima no console o objeto JavaScript resultante das operações.

const obj = require('./animais.json');
console.log(obj.animais);
obj.animais.push({
    id: 4,
    nome: 'caio',
    tipo: 'mamifero',
    habitat: 'escritorio'
})

obj.animais[0].habitat = 'Lagoa';

console.log(obj.animais);

delete obj.animais[0];

const objTransformadoString = JSON.stringify(obj);

console.log(objTransformadoString);