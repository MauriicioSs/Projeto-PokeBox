//ADICIONANDO AÇÕES A PAGINA WEB.

//CRIANDO VARIAVEIS (LINCANDO AS TAGS E OS ELEMENTOS HTML NAS VARIAVEIS CRIADAS).
const btAlterarTema = document.getElementById("bt-alterar-backGround");
const body = document.querySelector("body");
const imgBotao = document.querySelector(".Botao");

//IDENTIFICANDO O CLIC DO USUARIO NO POTÃO DE MUDANÇA DE BACKGROUND.
btAlterarTema.addEventListener("click", () => {
    //ALTERNANDO OS BACKGROUNDS ALTOMATICAMENTE.
    body.classList.toggle("modo-escuro");
    //CRIANDO UMA VARIAVEL E VERIFICANDO SE A CLASSE "modo-escuro" EXISTE DENTRO DO body.
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    //VERIFICANDO SE O MODO ESCURO ESTA ATIVO PARA TROCAR A IMAGEM DO BOTÃO.
    if(modoEscuroAtivo){
        imgBotao.setAttribute("src", "./src/imagens/sun.png");
    } 
    else{  
        imgBotao.setAttribute("src", "./src/imagens/moon.png");
    }
});