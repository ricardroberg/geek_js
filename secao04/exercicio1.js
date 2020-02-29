// EXERCICIO 1 - SEÇÃO 04
//Crie uma função que receba um objeto no formato abaixo...

var cliente = {
    nome: "Maria das Graças Xuxa Meneguel",
    email: "xuxa@666.com",
    telefone: "+55 11 666-6666",
    rua: "Rua dos Baixinhos",
    numero: 666,
    bairro: "Pinheiros",
    cidade: "São Paulo",
    uf: "SP"
}

// E retorne uma string com o seguinte formato:
// O(a) cliente Maria das Graças Xuxa Meneguel mora em São Paulo, SP.

console.log("O(a) cliente " + cliente.nome + " mora em " + cliente.cidade + ", " + cliente.uf)
// ou
console.log(`O(a) cliente ${cliente.nome} mora em ${cliente.cidade}, ${cliente.uf}`)