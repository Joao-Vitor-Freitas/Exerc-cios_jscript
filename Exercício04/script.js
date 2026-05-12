//Adiciona novos elementos com JS//
// captura botão
const btnBolinhas = document.getElementById("addBolinhas");

// variável de controle
let total = 0;

// conteúdo HTML vazio
let bolinhas = "";

// array com cores
let cores = [
    "azul",
    "vermelha",
    "verde",
    "amarela",
    "roxa"
];

// evento de clique
btnBolinhas.addEventListener("click", () => {

    // adiciona +1 no contador
    total = total + 1;

    // limpa conteúdo
    bolinhas = "";

    // cria bolinhas
    for(let index = 0; index < total; index++){

        // escolhe cor aleatória , Não sabia que havia uma função semelhante de python de random
        let corAleatoria = cores[Math.floor(Math.random() * cores.length)];

        // cria bolinha , aqui foi gambiarra , mas funciona!
        bolinhas = bolinhas + `<div class="bolinha ${corAleatoria}"></div>`;
    }

    // adiciona no HTML
    document.getElementById("grupoBolinhas").innerHTML = bolinhas;

});