
// Var -> escopo global

var numero = 42;
console.log(numero);

numero = numero + 18
console.log(numero);


// Let -> Forma mais moderna, evita erros, mantem scopo local

let outroNumero = 42;
console.log(outroNumero);

outroNumero = outroNumero + 18;
console.log(outroNumero);

let nome = 'Geek';
console.log(nome);

nome = 'University';
console.log(nome);

// VARIÁVEL DEFINIDA COM ESCOPO GLOBAL VAR
for(var i = 0; i < 5; i++){
    var valor = i * 3;
    console.log(valor);
}

console.log(valor);  // 12
console.log(i);  // 5


// VARIÁVEL DEFINIDA COM ESCOPO LOCAL LET
for(let j = 0; i < 5; i++){
    let outroValor = i * 3;
    console.log(outroValor);
}

// console.log(outroValor);  // ReferenceError: outroValor is not defined
// console.log(j);  // ReferenceError: outroValor is not defined


var numero = 80;
console.log(numero);

var numero = 32;  // Permite redeclarar a variável
console.log(numero);

let outroNumero2 = 80;
console.log(outroNumero2);

// let outroNumero2 = 32;  // SyntaxError: Identifier 'outroNumero' has already been declared
// console.log(outroNumero2);


// Const

const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

// TAXA = 1.5;  // TypeError: Assignment to constant variable.
// console.log(TAXA);

const curso = {nome: "Programação em JavaScript"};
console.log(curso);  // { nome: 'Programação em JavaScript' }

// Não posso alterar o valor de uma constante
// curso = 43; // Erro!

// Podemos realizar a mutação em dados contidos na constante
curso.nome = "Programação em Python";
console.log(curso); // { nome: 'Programação em Python' }

curso.emp = "Geek University"
console.log(curso)  // { nome: 'Programação em Python', emp: 'Geek University' }


/*
Dicas de como declarar variáveis em JavaScript:

- A variável poderá ser alterada? (vai variar?) se sim, use let
- A variável será constante? (não vai variar?) se sim, use const

*/

const VALOR = 5;

for(let i = 0; i < VALOR; i++){
    console.log(VALOR - i);
}
