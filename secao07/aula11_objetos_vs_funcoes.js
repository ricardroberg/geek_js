// Criando objeto através de uma factory function
const pessoa1 = (nome, sobrenome) => {
    return {
        andar: () => console.log(`${nome} ${sobrenome} está andando...`)
    }
}

const p1 = pessoa1('Felicity', 'Jones');

console.log(p1);  // { andar: [Function: andar] }
console.log(typeof(p1));  // object
p1.andar();  // Felicity Jones está andando...



// Criando objeto através de uma função construtora
function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.andar = function(){
        console.log(`${nome} ${sobrenome} está andando...`);
    }
}

const p2 = new Pessoa2('Felicity', 'Jones');

console.log(p2);  // Pessoa2 { nome: 'Felicity', sobrenome: 'Jones', andar: [Function] }
console.log(typeof(p2));  // object
p2.andar();  // Felicity Jones está andando



// Criando objeto através de uma classe
class Pessoa3{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    andar(){
        console.log(`${this.nome} ${this.sobrenome} está andando...`);
    }
}

const p3 = new Pessoa3('Felicity', 'Jones');

console.log(p3);  // oPessoa3 { nome: 'Felicity', sobrenome: 'Jones' }
console.log(typeof(p3));  // object
p3.andar();  // Felicity Jones está andando

/*
{ andar: [Function: andar] }
object
Felicity Jones está andando...

Pessoa2 { nome: 'Felicity', sobrenome: 'Jones', andar: [Function] }
object
Felicity Jones está andando...

Pessoa3 { nome: 'Felicity', sobrenome: 'Jones' }
object
Felicity Jones está andando...
*/