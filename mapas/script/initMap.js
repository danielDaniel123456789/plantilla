
function initMap() {
    inicializarLugaresNormalizados();

    const initialLocation = lugaresPersonalizadosNormalizados["san jose costa rica"].location;

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: initialLocation,
    });

    marker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: "San José, Costa Rica",
    });

    infoWindow = new google.maps.InfoWindow();

    marker.addListener("click", () => {
        actualizarInfoWindow("San José, Costa Rica", marker);
    });

    const buscarInput = document.getElementById("buscar");
    buscarInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            buscarLugar(buscarInput.value);
        }
    });
}