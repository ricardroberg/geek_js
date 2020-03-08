const nome = 'Programação em JavaScript';
const preco = 'R$ 27,99';
const horas = 25;

// const curso = {
//     nome: nome,
//     preco: preco,
//     instrutor: 'Geek University',
//     carga_horaria: horas,
// };


// Object Short Sintax - Quando atributo e variável possuêm o mesmo nome

const curso = {
    nome,
    preco,
    instrutor: 'Geek University',
    carga_horaria: horas,
};

console.log(curso);