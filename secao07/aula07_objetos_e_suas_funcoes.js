const curso = {
    nome: 'Programação em JavaScript',
    horas: 25,
    preco: 27.99
}

console.log(curso);  // { nome: 'Programação em JavaScript', horas: 25, preco: 27.99 }
console.log(typeof(curso));  // object

console.log(Object.keys(curso));  // [ 'nome', 'horas', 'preco' ]
console.log(Object.values(curso));  // [ 'Programação em JavaScript', 25, 27.99 ]
console.log(Object.entries(curso));
/*
[
  [ 'nome', 'Programação em JavaScript' ],
  [ 'horas', 25 ],
  [ 'preco', 27.99 ]
]
*/

Object.entries(curso).forEach(par => {
    console.log(`${par[0]}: ${par[1]}`);
});
// nome: Programação em JavaScript
// horas: 25
// preco: 27.99

Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});
// nome: Programação em JavaScript
// horas: 25
// preco: 27.99

// curso.nome = 'Criação de APIs Rest com Django Rest Framework';  // Permite alterar propriedade do atributo

Object.defineProperty(curso, 'publicacao', {
    enumerable: true,  // se vai aparecer quando incovar o objeto
    writable: false,
    value: '29/02/2020'
});

curso.publicacao = '01/01/2020'  // writable: false

console.log(curso);
console.log(curso.publicacao);

const outro = {};

Object.defineProperty(outro, '', {

});

Object.freeze(curso); // bloqueia todas as alterações no objeto

curso.nome = 'Dança da Garrafa';
console.log(curso);

const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Geek University'},
    {nome: 'Ricardo Brandão', empresa: 'Google'},
    {nome: 'Felipe Xavier', empresa: 'Sony'},
]

console.log(usuarios);
// [
//     { nome: 'Aline Moraes', empresa: 'Geek University' },
//     { nome: 'Ricardo Brandão', empresa: 'Google' },
//     { nome: 'Felipe Xavier', empresa: 'Sony' }
//   ]

console.table(usuarios);
/*
┌─────────┬───────────────────┬───────────────────┐
│ (index) │       nome        │      empresa      │
├─────────┼───────────────────┼───────────────────┤
│    0    │  'Aline Moraes'   │ 'Geek University' │
│    1    │ 'Ricardo Brandão' │     'Google'      │
│    2    │  'Felipe Xavier'  │      'Sony'       │
└─────────┴───────────────────┴───────────────────┘
*/