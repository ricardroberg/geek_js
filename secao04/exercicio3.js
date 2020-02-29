/*
Crie uma função que receba um valor em anos de experiência de um funcionário e
retorne o nível de experiência desde conforme:
De 0 a 2 anos: Júnior
De 3 a 5 anos: Pleno
De 6 acima: Sênior
*/

var tempo = 12;

if(tempo >= 0 && tempo <= 2){
    console.log("Funcionário Júnior");
}else if(tempo >= 3 && tempo <= 5){
    console.log("Funcionário Pleno");
}else{
    console.log("Funcionário Sênior");
}