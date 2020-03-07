function removerBotao(btn){
    let btn = document.querySelector('button');
    btn.document.querySelector('#app').removeChild(btn);
}


let btns = document.querySelectorAll('buttons');

for(let i=0; i< btns.length; i++){
    btns[i].onclick = function(){
        document.querySelector('#app').removeChild(this);
    };
}