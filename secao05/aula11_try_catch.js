// console.log(nome);  // ReferenceError: nome is not defined

// console.log('Oi...');

// console.log(4.Oi()); // SyntaxError: Invalid or unexpected token


// Tratamos erro com try/catch
try{
    console.log(nome);
}catch(e){
    console.log("Não foi possível imprimir nome.");
    console.log(e.name);  // ReferenceError
    console.log(e.message);  // nome is not defined
}

console.log('Oi...');

// Lançando erros ( DAR UMA PESQUISADA MELHOR SOBRE ISSO!!!!!!!
function dividir(num1, num2){
    if(num1 == 0 || num2 == 0){
        throw("Os valores devem ser positivos.");  // Lançando uma exceção
    }else{
        return num1 / num2;
    }
}

try{
    let ret = dividir(8, 2);
    console.log(ret);
}catch(e){
    console.log("Não foi possível dividir.");
}finally{
    console.log("Vamos continuar...");
}


