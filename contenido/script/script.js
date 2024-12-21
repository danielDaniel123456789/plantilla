function costaRica360() {
    cargando();

    // Reproducir el sonido
    const audio = document.getElementById("sonido");
    audio.play();

    // Esperar a que termine el sonido antes de redirigir
    audio.onended = function () {
        window.location.href = "https://aquies.cr/mapas/";
    };
}

function chepito() {
    cargando();

    // Reproducir el sonido
    const audio = document.getElementById("sonido");
    audio.play();

    // Esperar a que termine el sonido antes de redirigir
    audio.onended = function () {
        window.location.href = "https://chepitos.aquies.cr/";
    };
}
function promos() {
    cargando();

    // Reproducir el sonido
    const audio = document.getElementById("sonido");
    audio.play();

    // Esperar a que termine el sonido antes de redirigir
    audio.onended = function () {
        window.location.href = "https://promos360.aquies.cr/";
    };
}

https://promos360.aquies.cr/
var video = document.getElementById('myVideo');
video.currentTime = 10;

video.onended = function() {
    video.currentTime = 10;
    video.play();
};

function cargando() {
    let timerInterval;
    // Generar un timestamp único para evitar caché
    const timestamp = new Date().getTime();
    const logoUrl = `./contenido/img/aqui-es-logo.png?cache_buster=${timestamp}`;

    Swal.fire({
        title: `<img src="${logoUrl}" alt="" width="60%">`,
        html: "El sitio se cargará en <b></b> milisegundos.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("El sitio se cargó automáticamente.");
            // Aquí puedes agregar la redirección o la acción que necesites después de la carga
            // window.location.href = "URL_a_donde_deseas_redirigir";
        }
    });
}


