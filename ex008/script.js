a.innerText = window.document.querySelector('div#area');

a.addEventListeener('click',clique)
a.addEventListeener('mouseenter',entrar)
a.addEventListeener('mouseout',sair1)
function clique(){
    let a = window.document.querySelector('div#area');
    a.innerText = 'Você clicou aqui';
}
function entrar(){
    let a = window.document.querySelector('div#area');
    a.innerText = 'Não clique em mim';
    a.style.background = 'red';
}
function sair(){
    let a = window.document.querySelector('div#area');
    a.innerText = 'Não coloque o mouse em mim';
    a.style.background = '#035';
}