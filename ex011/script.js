let vel = window.document.querySelector('input#velocidade');
let vel_max = 40;

const check = window.document.querySelector('input#enviar');


 check.addEventListener('click',verificar);


let resultado = window.document.querySelector('.resposta');
let tentativa = 0;

function verificar(){
    if(vel.value === ''){
    return;
    }
    else{
        if (vel.value > 40){
        //document.write(`Você recebeu uma multa por estar a <b>${vel}Km/h</b> em uma via de <b>${vel_max}Km/h</b>)`); perde a estilização
        resultado.innerHTML += `Você recebeu uma multa por estar a <b>${vel.value}Km/h</b> em uma via de <b>${vel_max}Km/h</b><br>`;
        }
        if (tentativa == 0){
            resultado.innerHTML += 'Boa viagem e seja responsavel.<br>';
            tentativa = 1;
        }
    }

}