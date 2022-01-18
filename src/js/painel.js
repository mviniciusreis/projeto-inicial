/*

Quando clicar nas setas avançar e voltar 
temos que esconder todas as imagens e mostrar
a proxima imagem ou a imagem anterior.

    a imagem atual começa em 0 por ser a primeira image
    assim que for clicado no avançar eu preciso adicionar mais um
    ao contador de imagens pra poder saber qual imagem
    vai ser mostrada.

    esconder todas as imagens.
        pegar todas as imagens usando o DOM e remover a 
        class mostrar.

    mostrar a proxima imagem
        pegar todas as imagens, descobrir qual é a proxima
        , e colocar a classe mostrar nela.

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
};

function mostrarImagens(){
    imagensPainel[imagemAtual].classList.add('mostrar'); 
};

setaAvancar.addEventListener('click', function () {

    /*testa se o contador da imagemAtual é igual ao 
    total de imagens*/
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens){
        return;        
    };
    /* a imagem atual começa em 0 por ser a primeira image
    assim que for clicado no avançar eu preciso adicionar mais um
    ao contador de imagens pra poder saber qual imagem
    vai ser mostrada. */
    imagemAtual++;

    esconderImagens();
    
    mostrarImagens();


});

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0){
        return;
    };
    
    imagemAtual--;

    esconderImagens();

    mostrarImagens();

});

