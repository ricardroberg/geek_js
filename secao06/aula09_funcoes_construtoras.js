// Criando uma função construtora

function Pessoa(n, s, raca = 'Humano'){
    // atributos privados so conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    // método privado só conseguimos fazer uso dentro da função construtora
    let imprimirDados = function(){
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    // método público conseguimos acessar fora da função construtora
    this.fazerAniversario = function(){
        idade += 1;
        imprimirDados();
    }

    this.getIdade = function(){
        return idade;
    }
}


// Instanciando um objeto
const angelina = new Pessoa('Angelina', 'Feminino');

console.log(angelina);
console.log(angelina.peso);  // undefined
console.log(angelina.raca);  // Humano

angelina.fazerAniversario();  // Nome: Angelina, Idade: 1, Peso: 0.5, Altura: 0.3, Sexo: Feminino, Raça: Humano
angelina.fazerAniversario();  // Nome: Angelina, Idade: 2, Peso: 0.5, Altura: 0.3, Sexo: Feminino, Raça: Humano


// Instanciar um novo objeto

const felicity = new Pessoa('Felicity', 'Feminino');

felicity.fazerAniversario();  // Nome: Felicity, Idade: 1, Peso: 0.5, Altura: 0.3, Sexo: Feminino, Raça: Humano
console.log(felicity.getIdade());  // 1

console.log(typeof(Pessoa));  // function
console.log(typeof(felicity));  // object