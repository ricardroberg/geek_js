let xuxa = 'global';  // pode ser acessada globalmente no nosso projeto

function imprimir(){
    console.log(xuxa);
}

function outra(){
    let xuxa = 'local';  // pode ser acessada localmente no bloco/contexto
    imprimir();
    console.log(xuxa);  // local
}

outra();  // global

// Closure é o escopo da função

// Novo exemplo

let variavel1 = 'global';

function externa(){
    let variavel1 = 'local';

    function interna(){
        return variavel1;
    }
    return interna;
}

let executa = externa();

console.log(executa()); // local

/*
| Estamos estudand Closures (contexto léxico de uma função)
|
| Linguagem de programação chamada Clojure (é outra coisa)
|
|
*/