/*
Crie uma função que receba dois valores inteiros como parâmetro
e exiba todos os números ímpares entre estes dois números (sem incluí-los).
*/


function impares(num1, num2){
    if(num2 < num1){  // Se o primeiro número for maior que os segundo inverte eles
        var temp = num2  // Ahhh meu Python
        num2 = num1
        num1 = temp
    }
    for(var n = num1+1; n < num2; n++){
        if(n % 2 == 1){
            console.log(n)
        }
    }
}

impares(4, 12)