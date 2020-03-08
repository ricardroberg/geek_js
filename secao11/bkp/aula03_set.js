/*
    - Conjuntos não aceitam repetições de valores;
    - Conjuntos não são indexados;
*/ 

// Declarando um conjunto
let cursos = new Set();


// Adicionando valores
cursos.add('Programação para Leigos');
cursos.add('Algorítmos e Lógica de Programação');

// Adicionar valores concatenados

cursos.add('Programação em C').add("Programação em Java").add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

cursos.add('Banco de Dados');  // Não é adicionado novamente

console.log(cursos);
console.log(cursos.size) // 7

console.log(cursos.has('Banco de Dados'));  // true
console.log(cursos.has('Banco de dados'));  // false


// Deletar elementos de um conjunto

cursos.delete('Programação para Leigos');  // .delete retorna true of false
let ret = cursos.delete('Programação de leigos');
console.log(ret);  // false

console.log(cursos);
console.log(cursos.size) // 6


let frutas = ['Manga', 'Uva', 'Jaca', 'Uva'];
let frutas_unicas = new Set(frutas);
console.log(frutas_unicas);  // Set { 'Manga', 'Uva', 'Jaca' }