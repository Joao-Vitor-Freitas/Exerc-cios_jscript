// Capturando localização //
// captura botão
const btnLocalizar = document.getElementById("localiza");

btnLocalizar.addEventListener("click", () => {

    // função responsável por mostrar posição
    function showPosition(position){

        // recebe latitude
        let latitude = position.coords.latitude;

        // recebe longitude
        let longitude = position.coords.longitude;

        // mostra na tela
        document.getElementById("map").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;

        // Ou exibe no console , não sei qual era o exigido do exercício
        console.log("Latitude: " + latitude + " Longitude: " + longitude);

    }

    // solicita localização
    navigator.geolocation.getCurrentPosition(showPosition);

});