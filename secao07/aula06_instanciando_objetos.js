class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
}

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está falando comendo...`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está falando bebendo...`);
    }
}


class Carro{
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}


// Instanciação de Objetos - Forma 1

// const curso = new Object();
// curso.nome = 'Programação em JavaScript';
// curso.preco = 27.99;

// console.log(curso);  // { nome: 'Programação em JavaScript', preco: 27.99 }

// curso['qtd_alunos'] = 999;

// console.log(curso);  // { nome: 'Programação em JavaScript', preco: 27.99, qtd_alunos: 999 }


// delete curso.qtd_alunos;
// delete curso['preco'];

// console.log(curso);  // { nome: 'Programação em JavaScript' }


// Instanciação de Objetos - Forma 2 - Objeto Literal
const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo'
        },
    filiais: [
        {cidade: 'Rio de janeiro'},
        {cidade: 'Recife'}
        ]
    }
}

console.log(programa);
/*
{
  nome: 'Photoshop',
  preco: 8999.99,
  fabricante: {
    nome: 'Adobe',
    contato: 'contact@adobe.com',
    endereco: { rua: 'Da paz, 45', bairro: 'Nova Lima', cidade: 'São Paulo' },
    filiais: [ [Object], [Object] ]
  }
}
*/
console.log(programa.nome);  // Photoshop
console.log(programa.fabricante.nome);  // Adobe
console.log(programa.fabricante.filiais);  // [ { cidade: 'Rio de janeiro' }, { cidade: 'Recife' } ]
console.log(programa['fabricante']['filiais']);  // [ { cidade: 'Rio de janeiro' }, { cidade: 'Recife' } ]
console.log(programa.fabricante.filiais[0].cidade);  // Rio de janeiro
console.log(programa.fabricante.filiais[1]['cidade']);  // Recife

delete programa.fabricante.filiais;

console.log(programa.fabricante.filiais);  // undefined
// console.log(programa.fabricante.filiais.length);  // TypeError: Cannot read property 'length' of undefined



// Instanciação de Objetos - Forma 3 - Objeto Literal

const pessoa = {};
console.log(pessoa);  // {}

pessoa.nome = 'Angelina';
console.log(pessoa);  // { nome: 'Angelina' }


// Instanciação de Objetos - Forma 4 - Função Construtora

function Lampada(cor){
    this.cor = cor;
}

const l1 = new Lampada('Branca');

console.log(l1);  // Lampada { cor: 'Branca' }
console.log(typeof(l1));  // object


// Instanciação de Objetos - Forma 5 - Objecto a partir das nossas classes

const p1 = new Pessoa('Felicity', 'Jones');
console.log(p1);  // Pessoa { _nome: 'Felicity', _sobrenome: 'Jones' }
console.log(typeof(p1));  // object
console.log(p1.nome);  // Felicity -> função get
console.log(p1.sobrenome);  // Jones -> função get

p1.nome = 'Xuxa';
console.log(p1);  // Pessoa { _nome: 'Xuxa', _sobrenome: 'Jones' }

p1.falar('Olá baixinho!');  // Xuxa está falando Olá baixinho!
p1.comer();  // Xuxa está falando comendo...
p1.beber();  // Xuxa Jones está falando bebendo...

const fit = new Carro('Fit');

fit.imprimir();  // Honda Fit