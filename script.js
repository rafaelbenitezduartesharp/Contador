let aumentar = document.getElementById('aumentar');
let diminuir = document.getElementById('diminuir');
let reset = document.getElementById('reset');
let control = 0;

aumentar = document.addEventListener('click', (e) => {
    let botao = e.target.id
    if (botao == 'aumentar'){
        control++
        let text = document.getElementById('cont').innerHTML = control;
    }if(botao == 'diminuir'){
        control--
        let text = document.getElementById('cont').innerHTML = control;
    }if(botao == 'reset'){
        control = 0
        let text = document.getElementById('cont').innerHTML = control;
    }
});