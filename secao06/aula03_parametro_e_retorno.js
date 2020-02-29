function calcularIdade1(anoNascimento){
    const data = new Date(); // gera a data atual

    const idade = data.getFullYear() - anoNascimento;

    return idade;  // retorna os dados que podem ser utilizados por outros programas ou variáveis
}

function calcularIdade2(anoNascimento){
    const data = new Date(); // gera a data atual

    const idade = data.getFullYear() - anoNascimento;

    console.log(idade);  // apenas imprime os dados
}


let d = new Date();

console.log(d);  // 2020-02-28T11:33:00.004Z
console.log(d.getFullYear());  // 2020

console.log(calcularIdade1(1998));  // 22

let ret = calcularIdade1(1998);
console.log(ret); // 22

calcularIdade2(1998); // 22


const data = new Date();

console.log("Data Completa: " + data);  // Data Completa: Fri Feb 28 2020 08:40:14 GMT-0300 (Brasilia Standard Time)

console.log("Ano: " + data.getFullYear());  // Ano: 2020

console.log("Mês: " + data.getMonth());  // JS mês começa em 0 até 11


// Fique esperto

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4,6));  // 10

console.log(somar(4));  // NaN

console.log(somar(4, 6, 8));  // 10

console.log(somar(4, 6, 8, 3, 2, 1, 19));  // 10

