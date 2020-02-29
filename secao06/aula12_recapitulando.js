console.log(somar(4, 6));
console.log(somar2(4, 6));

// Função literal
function somar(n1, n2){
    return n1 + n2;
}

// Não é forma literal
let somar2 = function(v1, v2){  // ReferenceError: Cannot access 'somar2' before initialization
    return v1 + v2
}


// JavaScript só faz o Hoisting(içamento) se a fun'ão for literal