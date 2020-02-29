var valores = [2, 4, 6, 8, 10];
console.log(valores);

var dobro = valores.map(function(valor){
    return valor * 2;
});

console.log(dobro);


function dobrar(valores){
    return valores * 2;
}

dobro = valores.map(dobrar);
console.log(dobro);
// console.log(valores.map(x=> x*2));  //Lembrei da função arrow do outro curso.


// Encadeando maps para realizar múltiplas transformações

function somar_4(valor){
    return valor + 4;
}

function dividir_por_5(valor){
    return valor / 5;
}

var resultado = valores.map(dobrar).map(somar_4).map(dividir_por_5);  // [ 1.6, 2.4, 3.2, 4, 4.8 ]
console.log(resultado);

/*
| Valor original = [ 2, 4, 6, 8, 10 ]
| Passo 1 -> dobrar = [ 4, 8, 12, 16, 20 ]
| Passo 2 -> soma_4 = [ 8, 12, 16, 20, 24 ]
| passo 3 -> dividir_por_5 = [ 1.6, 2.4, 3.2, 4, 4.8 ]
*/
