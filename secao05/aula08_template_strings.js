let idade = 19;
const NOME = 'Geek';

function somaTres(idade){
    return idade + 3;
}

console.log(NOME + ' tem ' + idade + ' anos.'); // Geek tem 19 anos.

// Template Strings
console.log(`${NOME} tem ${idade} anos.`); // Geek tem 19 anos.

console.log(`${NOME} tem ${somaTres(idade)} anos.`); // Geek tem 22 anos.


/*
Em template strings usa-se a cráse, e não aspas simples ou acento agúdo

Não é -> '
Não é -> á
É -> `
*/
