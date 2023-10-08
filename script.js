
var map = L.map('map').setView([37.344,-4.548], 8); // Andalucía

// Capas base
var cartodbLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);


function onEachFeature(feature, layer) {
    layer.bindPopup(feature.properties.City + ", " + feature.properties.State + ", " + feature.properties.Country);
  }

  $.getJSON("map_airport.geoJSON", function (cities) { // pull data from external file
    L.geoJson(cities, {
      onEachFeature: onEachFeature,
      pointToLayer: function (feature, latlng) {
        switch (feature.properties.Remember) {
          case '1': return L.marker(latlng, {icon: visitedIcon});
          case '?': return L.marker(latlng, {icon: uncertainIcon});
          case '0': return L.marker(latlng, {icon: uncertainIcon});
        }
      }
    }).addTo(map);
  })
