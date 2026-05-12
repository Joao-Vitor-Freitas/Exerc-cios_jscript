// Leitura de forms e cálculo //
// captura botão
const botaoSoma = document.getElementById("somar");

// evento de clique
botaoSoma.addEventListener("click", () => {

    // captura os valores
    let numero1 = document.getElementById("numero1").value;

    let numero2 = document.getElementById("numero2").value;

    // converte texto para número
    let soma = parseInt(numero1) + parseInt(numero2);

    // exibe resultado
    document.getElementById('Resultado').innerHTML = "Meu resultado é " + soma ;

});