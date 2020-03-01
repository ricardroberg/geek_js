/*
JSON - JavaScript Object Notation
*/

const curso = {
    nome: 'Programação em JavaScript',
    horas: 27,
    preco() {
        return this.horas * 0.67;
    }
}

console.log(curso);
/*
{
    nome: 'Programação em JavaScript',
    horas: 27,
    preco: [Function: preco]
}
*/
// console.log(curso.preco);  //  [Function: preco]
console.log(typeof(curso));  // object


// Convertendo o objeto JavaScript para JSON
const json = JSON.stringify(curso);

console.log(json);  // {"nome":"Programação em JavaScript","horas":27}
console.log(typeof(json));  // string


// Convertendo de JSON para objeto JavaScript
const obj = JSON.parse(json);

console.log(obj);  // { nome: 'Programação em JavaScript', horas: 27 }
console.log(typeof(obj));  // object


// const json_errado = "{'nome': 'Programação em JavaScript', 'preco': 27.99}"  // ERRADO!
// const novoObj = JSON.parse(json_errado);  // SyntaxError: Unexpected token ' in JSON at position 1
const json_errado = '{"nome": "Programação em JavaScript", "preco": 27.99}'

console.log(json_errado);  // {'nome': 'Programação em JavaScript', 'preco': 27.99}
console.log(typeof(json_errado));  // string

const novoObj = JSON.parse(json_errado);
console.log(novoObj);  // { nome: 'Programação em JavaScript', preco: 27.99 }
console.log(typeof(novoObj));  // object