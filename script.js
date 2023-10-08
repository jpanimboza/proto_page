
var map = L.map('map').setView([37.344,-4.548], 8); // Andalucía

// Capas base
var cartodbLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

L.geoJSON(places).addTo(map)
