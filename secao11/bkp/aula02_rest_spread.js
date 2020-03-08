// Rest/Spread (Juntar/Espalhar) -> ...

function total(...precos){
    let total = 0;
    // console.log(precos); // tranforma os valores de entrada em um array
    precos.forEach(p => total += p);

    return total;
}

console.log(total(23.44, 22, 3.45, 5.67).toFixed(2));  // 54.56

console.log(total(23, 67));  // 90

console.log(total(3, 6, 77));// 86

console.log(total()); // 0

let frutas1 = ['Manga', 'Uva', 'Melancia'];

let frutas2 = ['Abacate', 'Morango', 'Jaca'];

let compras = [...frutas1, ...frutas2];
// let compras2 = frutas1.concat(frutas2); // hummmm

console.log(compras);  // [ 'Manga', 'Uva', 'Melancia', 'Abacate', 'Morango', 'Jaca' ]
// console.log(compras2)

let alunos = ['Paula', 'Felipe', 'Fernanda'];
let novo = 'Joana';

// alunos.push(novo);
let todos = [...alunos, novo];

console.log(todos);