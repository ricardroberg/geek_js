/*
Função Fábrica - Function Factory
*/

function fabricarCurso(n, p){
    const desconto = 0.90;
    return {
        nome: n,
        preco: (p * desconto).toFixed(2)
    }
}

console.log(fabricarCurso('Programação em JavaScript', 27.99));  // { nome: 'Programação em JavaScript', preco: '25.19' }
console.log(fabricarCurso('Criação de APIS com Django Rest Framework', 35.99));  // { nome: 'Criação de APIS com Django Rest Framework', preco: '32.39' }

cursos = [];

for(i = 0; i < 5; i++){
    cursos.push(fabricarCurso(`Curso ${i + 1}`, `${19.99 + i * 3}`));
}

console.log(cursos);
/*
[
  { nome: 'Curso 1', preco: '17.99' },
  { nome: 'Curso 2', preco: '20.69' },
  { nome: 'Curso 3', preco: '23.39' },
  { nome: 'Curso 4', preco: '26.09' },
  { nome: 'Curso 5', preco: '28.79' }
]
*/