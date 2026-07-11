
let nome = window.document.querySelector('input#nome');
let email = window.document.querySelector('input#email');

let tel = window.document.querySelector('input#telefone');


let profi = window.document.querySelector('select#profissao');

let data_nasc = window.document.querySelector('input#data_nasc');
let hoje = new Date().getFullYear();
let idade =  hoje - data_nasc;//para esse simples programa sem estrutura de condição farei desta forma

let max = window.document.querySelector('#data_nasc[max]');
max = hoje;

const botao = window.document.querySelector('input.botao');

/*dados = [
    nome.value,
    email.value,
    tel.value,
    profi.value,
    idade.value    
];*/
console.log(botao);
botao.addEventListener('click',criar);

function criar(){ 
    alert('Perfil criado com sucesso!');
    window.document.querySelector('div').style.display = 'none';
    window.document.write(`
        <h1>SEUS DADOS:</h1>
        <p>Nome:<b>${nome.value}</b></p>
        <p>E-mail:<b>${email.value}</b></p>
        <p>Telefone:<b>${tel.value}</b></p>
        <p>Idade:<b>${hoje - data_nasc.value} anos</b></p>
        <p>Profissao:<b>${profi.value}</b></p>
        `);
}
//addEventListener('')