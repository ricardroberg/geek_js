// COM CSS
let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    //console.log(btns[i].getAttribute('class').split('-')[1]);
    btns[i].onclick = function(){
        document.querySelector('body').style.backgroundColor = this.getAttribute('class').split('-')[1]
        //this.style.backgroundColor;
    }
}


// SEM CSS
// let btns = document.querySelectorAll('button');

// for(let i = 0; i < btns.length; i++){
//     btns[i].onclick = function(){
//         document.querySelector('body').style.backgroundColor = this.style.backgroundColor;
//     }
// }


// MINHA SOLUCAO

// let btns = document.querySelectorAll('button');

// for(let i = 0; i < btns.length; i++){
//     btns[i].style.backgroundColor = btns[i].getAttribute('class');
//     btns[i].onclick = function(){
//         document.querySelector('body').style.backgroundColor = btns[i].getAttribute('class');
//     }
// }