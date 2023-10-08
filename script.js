var map = L.map('map').setView([48.833, 2.333],5); 

var osmLayer = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Jonathan'
  }).addTo(map);
    
map.addLayer(osmLayer);

$.getJSON('map_airport.geojson',function(data){
	var geoLayer = L.geoJson(data).addTo(map);
    /*L.geoJson(data,{
      pointToLayer: function(feature,layer){
        var marker = L.marker(layer,{icon: Icon});
        marker.bindPopup('<b>AIRPORT NAME : </b>'+feature.properties.name+' ('+feature.properties.abbrev+')<br>\
        <b>TYPE OF AIPORT : </b>'+feature.properties.type+'<br>\
        <a href="'+feature.properties.wikipedia+'">Wikipedia</a>').addTo(map);
        marker.addTo(map)
        return marker;
      }
    },
             );*/
});
var Icon = new L.Icon({
  	iconUrl: 'https://cdn-icons-png.flaticon.com/512/0/614.png',
  	iconSize: [40,40],
  	iconAnchor: [12, 41],
  	popupAnchor: [1, -34],
  	shadowSize: [41, 41]
	});	
