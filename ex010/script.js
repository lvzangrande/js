//Criado sem usar condições if e else
let nome = window.document.querySelector('input#nome');
let email = window.document.querySelector('input#email');

let tel = window.document.querySelector('input#telefone');


let profi = window.document.querySelector('select#profissao');

let data_nasc = window.document.querySelector('input#data_nasc');
let hoje = new Date().getFullYear();
let idade =  hoje - Number(data_nasc.value);//para esse simples programa sem estrutura de condição farei desta forma

let max = window.document.querySelector('#data_nasc[max]');
max = data_nasc.setAttribute('max',hoje)//função para dar valor para atributo;

const botao_criar = window.document.querySelector('input.botao');


//let div_pergunta = window.document.querySelector('div.perguntas');
botao_criar.addEventListener('click',criar);

function criar(){ 
    alert('Perfil criado com sucesso!');
    //window.document.querySelector('#1').style.display = 'none';
    window.document.body.innerHTML += `
        <div class='respostas' id='2'>
        <h1>SEUS DADOS:</h1>
        <p>Nome:<b>${nome.value}</b></p>
        <p>E-mail:<b>${email.value}</b></p>
        <p>Telefone:<b>${tel.value}</b></p>
        <p>Idade:<b>${idade} anos</b></p>
        <p>Profissao:<b>${profi.value}</b></p>
        </div>`;
        //<input type='button' id='del' value='Limpar'>
        
        
        //window.document.querySelector('#del').addEventListener('click',limpar);
}//ainda não aprendi a manter a estilização antes de executar o java script
/*function limpar(){
    window.alert('Dados limpos');
    window.document.querySelector('#1').style.display = '';
    window.document.querySelector('#2').remove();
}não consegui fazer funcionar com meus conhecimentos atuais*/
//addEventListener('')