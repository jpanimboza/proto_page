
var map = L.map('map').setView([37.344,-4.548], 8); // Andalucía

// Capas base
var cartodbLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

// Función para ventana de datos al hacer click sobre el punto

function popup(feature, layer) { 
	if (feature.properties && feature.properties.nomb_mus) 
	{ 
		layer.bindPopup( "<strong>" + feature.properties.nomb_mus + "</strong><br/>" + feature.properties.municipio + ". " + feature.properties.provincia ); 
	} 
}

// Cargar GeoJSON desde un archivo externo

// $.getJSON("museos_wfsdera.geojson", function (data) {
// var museosand = new L.geoJson(data, {
// 	onEachFeature: popup
// 	}).addTo(map);
// })


var museosand = L.geoJson(null, {
	onEachFeature: popup
});

$.getJSON("map_airport.geojson", function (data) {
	museosand.addData(data);
});

museosand.addTo(map);
