function somar(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

console.log(somar());  // 0
console.log(somar(2));  // 2
console.log(somar(2, 5));  // 7
console.log(somar(5, 3, 9));  // 17
console.log(somar(2, 4, 6, 8, 12));  // 32



function imprimeValores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

imprimeValores(); // não imprime nada
imprimeValores(4, 6);
imprimeValores(4, 6, 8);
imprimeValores(3, 6, 8, 12, 44, 56);


// Gambiarra 1

function somar2(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;
    return num1 + num2 + num3;
}

console.log(somar2(4, 5, 6)); // 15
console.log(somar2()); // 6
console.log(somar2(2)); // 7
console.log(somar2(2, 2)); // 7
console.log(somar2(2, 2, 2)); // 6
console.log(somar2(2, 2, 2, 2)); // 6

console.log(somar2(0, 0, 0));  // Era para ser 0 mas ele retorna 6. JS considera 0 como false


// Gambiarra 2

function somar3(num1, num2, num3){
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 2 : num2;
    num3 = isNaN(num3) ? 3 : num3;
    return num1 + num2 + num3;
}

console.log(somar3(4, 5, 6)); // 15
console.log(somar3()); // 6
console.log(somar3(2)); // 7
console.log(somar3(2, 2)); // 7
console.log(somar3(2, 2, 2)); // 6
console.log(somar3(2, 2, 2, 2)); // 6
console.log(somar3(0, 0, 0));  // 0


// RECOMENDADA

function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

console.log(somar4(4, 5, 6)); // 15
console.log(somar4()); // 6
console.log(somar4(2)); // 7
console.log(somar4(2, 2)); // 7
console.log(somar4(2, 2, 2)); // 6
console.log(somar4(2, 2, 2, 2)); // 6
console.log(somar4(0, 0, 0));  // 0

console.log(somar4('a', 'b', 'c'));  // abc
console.log(somar4(true, false, 'c'));  // 1c true = 1, false = 0
console.log(somar4(2, true, false));  // 3 


/*
Em JavaScript, 1 é considerado truee 0 é considerado false
*/

function somar5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não foi possível efetuar a soma.';
    }
}

console.log(somar5(2, 2)); // 7
console.log(somar5(2, 2, 2)); // 6
console.log(somar5(2, 2, 2, 2)); // 6
console.log(somar5(0, 0, 0));  // 0

console.log(somar5('a', 'b', 'c'));  // Não foi possível efetuar a soma.
console.log(somar5(true, false, 'c'));  // Não foi possível efetuar a soma.
console.log(somar5(2, true, false));  // Não foi possível efetuar a soma.