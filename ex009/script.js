let button_somar = window.document.querySelector('input#soma');
button_somar.addEventListener('click',somar);
function somar(){                    
                let input1 = window.document.querySelector('input#num1');
                let input2 = window.document.querySelector('input#num2');//declarando variavel das entradas
                let resultado = window.document.querySelector('div.resultado');
                

                let n1 = Number(input1.value);
                let n2 = Number(input2.value);//obtendo o valor das entradas e convertendo-o para número
                let soma = n1+n2;    

                
                
                resultado.innerText = `${n1} + ${n2} = ${soma}`
}
