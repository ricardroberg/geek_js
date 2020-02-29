var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

// console.log(filtrar_pares(3));  // false
// console.log(filtrar_pares(8));  // true

function filtrarPares(n){
    return n % 2 === 0;
}

function filtrarImpares(n){
    return n % 2 !== 0;
}

function filtrarMultiplos5(n){
    return n % 5 === 0;
}

var ret = numeros.filter(filtrarPares);
console.log(ret);  // [ 2, 4, 6, 8, 10 ]

var ret = numeros.filter(filtrarImpares);
console.log(ret);  // [ 1, 3, 5, 7, 9 ]

var ret = numeros.filter(filtrarMultiplos5);
console.log(ret);  // [ 5, 10 ]

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3},
];
console.log(alunos);

function filtrarNotasMaioresQue8(aluno){
    return aluno.nota > 8;
}

function filtrarNotasMaioresQue7(aluno){
    return aluno.nota > 7;
}

var filtrados = alunos.filter(filtrarNotasMaioresQue8);
console.log(filtrados);  // [{ nome: 'Pedro', nota: 8.5 }, { nome: 'Maria', nota: 10 }, { nome: 'Fernanda', nota: 9.2 }]
console.log(filtrados.length)

filtrados = alunos.filter(filtrarNotasMaioresQue7);
console.log(alunos.length);
console.log(filtrados.length)