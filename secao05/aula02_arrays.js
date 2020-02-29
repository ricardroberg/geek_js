/*
Array contendo 5 elementos -> n = 5
// Índices -> posição do elemento no array
[0][1][2][3][4]

// valores em um Array
[12]['Geek'][true][48][60.5]

// Detalhes sobre arrays
- Possuem tamanho infinito*
- Podemos colocar qualquer tipo de dado
*/


// Forma 1
var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
//var alunos = ['Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia'];
console.log(alunos);


// Forma 2 (Recomendada)
var notas = [1, 3, 5, 7, 9];
console.log(notas);

// Criando um array vazio
var dados = []
console.log(dados);

// Fazendo acesso ao valor de um índice
console.log(notas[2]); 

// Alterando o valor a partir do índice
notas[2] = 12;
console.log(notas);

// Atenção ao acessar um valor com um índice que não existe
notas[9] = 10; // não existe índice 10
console.log(notas);


if(notas[5] == undefined){
    notas[5] = 54;
}

console.log(notas[5]); // 54
console.log(notas[6]); // undefined
console.log(notas[7]); // undefined
console.log(notas[8]); // undefined
console.log(notas[9]); // 10

console.log(notas[5] == undefined); // false


// Inserindo elementos no final do array

var nomes = ['Paula', 'Maria', 'Julia'];
console.log(nomes);

nomes.push('Vanessa'); // insere o valor no final do array
console.log(nomes)

// Tamanho do array
console.log(nomes.length); // 4

// Ordenar os dados de um array
var nomes = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mário', 'Ana', 'Carla'];
console.log(nomes);

nomes.sort()  // Para strings
console.log(nomes);

var precos = [123.55, 42.27, 546.99, 23.12];
console.log(precos); // [ 123.55, 42.27, 546.99, 23.12 ]

// precos.sort() // ATENÇÃO Ordenação de floats não funciona assim!
// console.log(precos); // [ 123.55, 23.12, 42.27, 546.99 ]
precos.sort(function(a,b){return a - b;});
console.log(precos);

var idades = [5, 1, 8, 12, 44, 78]
console.log(idades);  // [ 5, 1, 8, 12, 44, 78 ]

// idades.sort()
// console.log(idades);  // [ 1, 12, 44, 5, 78, 8 ]
idades.sort(function(a,b){return a - b;});
console.log(idades);

// Deletando dados de um array
delete idades[3];  // deixa espaço vazio [ 1, 5, 8, <1 empty item>, 44, 78 ]
console.log(idades);

// Modificando(adicionando/removendo) dados de um array
idades[3] = 12;

idades.splice(3, 2); // A partir do índice 3, delete 2 elemento
console.log(idades);  // não fica espaço vazio  1, 5, 8, 78 ]

idades.splice(3, 0, 56, 89); // A partir do índice 3 não deleta nada mas adiciona 56 e 89 [ 1, 5, 8, 56, 89, 78 ]
console.log(idades);

// idades[3] = 23;
idades.splice(3, 1, 23); // A partir do índice 3, deleta 1, e adiciona 23 [ 1, 5, 8, 23, 89, 78 ]
console.log(idades);

// Iterando em um array
for(var i = 0; i < idades.length; i++){
    console.log(idades[i]);
}

// Removendo elementos da última posição do array
idades.pop();  // Remove e retorna o último elemento de um array
console.log(idades);  // [ 1, 5, 8, 23, 89 ]

var ret = idades.pop()
console.log(ret); // 89
console.log(idades);  // [ 1, 5, 8, 23 ]

// Removendo o primeiro elemento de um array
idades.shift();  // Remove e retorna o primeiro elemento de um array
console.log(idades);  // [ 5, 8, 23 ]

var ret = idades.shift()
console.log(ret); // 5
console.log(idades);  // [ 8, 23 ]

// Inserindo elementos no início de um array
idades.unshift(99);
console.log(idades);  // [ 99, 8, 23 ]


// Retorna um novo array a partir do índice informado
var idades = [5, 1, 8, 12, 44, 78]
var novo = idades.slice(3);
console.log(novo); // [ 12, 44, 78 ]

var novo = idades.slice(1, 4); // a partir do índice1, pegue até o índice 2, sem incluí-lo
console.log(novo);  // [ 1, 8, 12 ]

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); // concatena os dois arrays
console.log(rest);  // [2, 4, 6, 8, 10, 1, 3, 5, 7,  9]

rest.sort(function(a,b){return a - b;});
console.log(rest);

// 4 x 4
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.table(tabuleiro);
/*
[
  [ 1,   2,  3,  4 ], // linha 0
  [ 5,   6,  7,  8 ], // linha 1
  [ 9,  10, 11, 12 ], // linha 2
  [ 13, 14, 15, 16 ]  // linha 3
]
*/

console.log(tabuleiro[0][0]);  //linha 0 coluna 0 -> 1
console.log(tabuleiro[2][2]);  //linha 2 coluna 2 -> 11