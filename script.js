// Función que se ejecuta una vez que se carga el DOM
document.addEventListener("DOMContentLoaded", function() {
    // Crea un mapa y establece sus coordenadas iniciales
    var mymap = L.map('map').setView([51.505, -0.09], 13);

    // Agrega una capa de mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // Agrega un marcador al mapa
    var marker = L.marker([51.5, -0.09]).addTo(mymap);

    // Agrega un pop-up al marcador
    marker.bindPopup("<b>¡Hola!</b><br>Esto es un marcador.").openPopup();
});
