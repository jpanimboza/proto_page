var map = L.map('map').setView([48.833, 2.333],5); 

var osmLayer = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Jonathan'
  }).addTo(map);
    
map.addLayer(osmLayer);

var museosand = L.geoJson(null);

$.getJSON("map_airport.geojson", function (data) {
	museosand.addData(data);
});

museosand.addTo(map);
