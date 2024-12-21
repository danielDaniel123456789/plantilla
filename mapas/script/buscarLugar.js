function buscarLugar(query) {
    const request = {
        query: query,
        fields: ["name", "geometry", "formatted_address"],
    };

    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results && results[0]) {
            const place = results[0];

            // Centra el mapa en el lugar encontrado
            map.setCenter(place.geometry.location);
            map.setZoom(14);

            // Actualiza el marcador
            marker.setPosition(place.geometry.location);
            marker.setTitle(place.name);

            // Genera el enlace de Google Maps
            const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat()},${place.geometry.location.lng()}`;

            // Actualiza la ventana de información
            infoWindow.setContent(`
                <div>
                    <h4>${place.name}</h4>
                    <p>${place.formatted_address}</p>
                    <a href="${googleMapsLink}" target="_blank" style="color:blue; text-decoration:underline;">
                        Ver en Google Maps
                    </a>
                </div>
            `);
            infoWindow.open(map, marker);

            // Añade un evento para que el marcador muestre la ventana de información al hacer clic
            google.maps.event.clearListeners(marker, "click");
            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });
        } else {
            alert("No se encontró el lugar. Intenta nuevamente.");
        }
    });
}
