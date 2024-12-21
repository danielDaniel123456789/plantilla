function actualizarInfoWindow(nombreLugar, marker, place = null) {
    infoWindow.close(); // Cierra cualquier infoWindow anterior para evitar conflicto
    const lugarPersonalizado = lugaresPersonalizados[nombreLugar];

    if (lugarPersonalizado) {
        // Mostrar datos personalizados
        infoWindow.setContent(`
            <div style="text-align: center;">
                <img src="giro360.webp" alt="${nombreLugar}" style="width: 150px; height: auto; border-radius: 10px;">
                <p><b>${lugarPersonalizado.descripcion}</b></p>
                <button onclick="window.open('${lugarPersonalizado.vista360}', '_blank')" style="padding: 10px 15px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Imagen vista en 360
                </button>
            </div>
        `);
    } else if (place) {
        // Mostrar datos proporcionados por Google Maps con la imagen cargada
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        const imagenLugar = "../iconos_plantilla/img/giro360.webp"; // Ruta de la imagen a cargar

        infoWindow.setContent(`
            <div style="text-align: center;">
                <img src="${imagenLugar}" alt="Imagen del lugar" style="width: 20%; height: auto; border-radius: 10px; margin-bottom: 10px;">
           
                <p>Registrate y podras mostrarte tu ubicacion en 360°</p>
                <button onclick="registrarLugar('${place.name}', ${lat}, ${lng})"
                    style="padding: 10px 15px; background-color: #28A745; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Registrar mi sitio
                </button>
                <br><br>
                <a href="${googleMapsUrl}" target="_blank" style="color: #007BFF; text-decoration: underline; font-size: 14px;">
                    Redireccionar en Google Maps
                </a>
            </div>
        `);
    } else {
        // Mostrar mensaje genérico si no hay datos disponibles
        infoWindow.setContent(`
            <div style="text-align: center;">
                <p><b>${nombreLugar}</b></p>
                <p>No hay datos adicionales disponibles.</p>
            </div>
        `);
    }

    infoWindow.open(map, marker);
}

// Función para manejar el registro del lugar
function registrarLugar(nombre, lat, lng) {
    alert(`Lugar registrado:\nNombre: ${nombre}\nLatitud: ${lat}\nLongitud: ${lng}`);
    // Aquí puedes agregar código para enviar estos datos a tu backend o almacenarlos en tu base de datos.
}
