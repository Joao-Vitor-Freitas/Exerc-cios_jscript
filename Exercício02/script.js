// Adicionando conteúdo HTML //
// captura o botão de troca de cor
const btnTrocaCor = document.getElementById("trocaCor");

// adiciona evento de clique
btnTrocaCor.addEventListener("click", () => {

    // captura a div
    let caixaTexto = document.getElementById("caixa");

    // verifica a classe atual
    if(caixaTexto.className == "verde"){

        // troca para vermelho
        caixaTexto.classList.add("vermelho");
        caixaTexto.classList.remove("verde");

    } else {

        // volta para verde
        caixaTexto.classList.add("verde");
        caixaTexto.classList.remove("vermelho");
    }

});

// vai captura o botão de troca de texto //
const btnTrocaTexto = document.getElementById("trocaTexto");

btnTrocaTexto.addEventListener("click", () => {

    // vai capturar a div novamente //
    let caixaTexto = document.getElementById("caixa");

    // verifica o texto atual //
    if(caixaTexto.innerText == "Maca"){

        document.getElementById("caixa").innerHTML = "Limão";

    } else {

        document.getElementById("caixa").innerHTML = "Maca";
    }

});