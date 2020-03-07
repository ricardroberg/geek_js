// let itexto = document.getElementById('produto');

// console.log(itexto);  // <input id="produto" class="form-control" type="text" name="produto">

// let spans = document.getElementsByTagName('span'); // Elements...plural

// console.log(spans)  // HTMLCollection [ span.texto, span.texto ]

// let eles = document.getElementsByClassName('texto'); // Elements...plural

// console.log(eles)  // HTMLCollection(3) [ button.btn.btn-primary.texto, span.texto, span.texto ]

// Ler Valores

// console.log(spans[0].textContent);  // Geek
// console.log(spans[1].innerHtml); // undefined


// Alterar valores

// spans[0].textContent = 'JavaScript ';
// spans[1].innerHTML = 'Geek University'; // Efeito direto no HTML

// let span = document.getElementsByTagName('span')[0];

// console.log(span.innerHTML);  // JavaScript 

// span.style.textTransform = 'uppercase';  // JavaScript  => Direto no HTML

// let imp = document.querySelector('body div.container div.row input');  // Pega input que está dentro de uma div com classe row está dentro de uma div com classe container que está dentro do body

// console.log(imp); // <input id="produto" class="form-control" type="text" name="produto">

// let eles = document.querySelector('.texto');  // busca pela classe primeiro elemento

// console.log(eles);  // <button class="btn btn-primary texto">

// let eles2 = document.querySelectorAll('.texto');  // busca pela classe TODOS os elementos
// console.log(eles2);
// 0: <button class="btn btn-primary texto">​
// 1: <span class="texto">​
// 2: <span class="texto"></span>

// let div1 = document.querySelector('#div1');  // busca elemento pelo id
// console.log(div1);  // <div id="div1" class="row">

// let imp = document.querySelector('input[name=produto]');
// console.log(imp);  // <input id="produto" class="form-control" type="text" name="produto">

// let imp = document.querySelector('input[name=preco]');
// console.log(imp);  // <input id="preco" class="form-control" type="text" name="preco">


// Exemplo 1

// let btn = document.querySelector('button.btn');
// btn.onclick = function(){
//     alert('Botão clicado...');
// }


// Exemplo 2 

let btn = document.querySelector('button.btn');
let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}

