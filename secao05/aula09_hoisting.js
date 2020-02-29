
// var nome;  // Hoisting - O JavaScript declara a variável não declarada.

console.log(nome);  // undefined  - Aqui ocorre o Hoisting (içamento) SÓ FUNCIONA COM var

var nome = 'Geek';  // Declarando e inicializando a variável
//nome = 'Geek';  // Hoisting - Ignora o var e apenas inicializa a variável

console.log(nome);  // Geek



console.log(idade + 4);  // NaN - undefined + 4 = Not a Number

var idade = 23;

console.log(idade);