// destructuring com arrays

const NUMEROS = [1, 3, 5, 7];

const [NUM1, NUM2, NUM3, NUM4] = NUMEROS;

console.log(NUM1);
console.log(NUM2);
console.log(NUM3);
console.log(NUM4);

// Podemos descartar valores

const [N1,, N3, N4] = NUMEROS;

console.log(N1);  // 1
console.log(N3);  // 5
console.log(N4);  // 7

// Poemos colocar valor default que será usado caso não haja no container
const [NU1, NU2, NU3, NU4 = 34, NU5 = 99] = NUMEROS;

console.log(NU1); // 1
console.log(NU2); // 3
console.log(NU3); // 5
console.log(NU4); // 7
console.log(NU5); // 99

// Destructuring com objeto
const PRODUTO = {
    nome: "Playstation 4",
    preco: 1678.44
};

const {nome, preco} = PRODUTO;

console.log(nome);
console.log(preco);
console.log(`${nome} custa R$ ${preco}.`);  // Playstation 4 custa R$ 1678.44.

const {n} = PRODUTO;
console.log(n); // undefined

const {nome} = PRODUTO;  // tem que ter o mesmo nome do atributo do objeto
console.log(nome);