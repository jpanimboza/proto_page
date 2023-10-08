var map = L.map('map').setView([48.833, 2.333],5); 

var osmLayer = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Emilie Locquette'
  }).addTo(map);
    
map.addLayer(osmLayer);

$.getJSON("https://jpanimboza.github.io/proto_docs/map_airport.geojson",function(data){
    L.geoJson(data,{
      pointToLayer: function(feature,layer){
        var marker = L.marker(layer,/* {icon: Icon}*/);
/*        marker.bindPopup('<b>AIRPORT NAME : </b>'+feature.properties.name+' ('+feature.properties.abbrev+')<br>\
        <b>TYPE OF AIPORT : </b>'+feature.properties.type+'<br>\
        <a href="'+feature.properties.wikipedia+'">Wikipedia</a>').addTo(map);*/
        marker.addTo(map)
        return marker;
      }
    }, 
             );
});

/*var Icon = new L.Icon({
  	iconUrl: 'https://cdn-icons-png.flaticon.com/512/0/614.png',
  	iconSize: [40,40],
  	iconAnchor: [12, 41],
  	popupAnchor: [1, -34],
  	shadowSize: [41, 41]
	});	*/
function colorPuntos(d) { 
	return d == "mid" ? '#FF0000' : 
	d == "mid and military" ? '#00FF00' : 
	d == "major" ? '#0000FF' : 
	d == "major and military" ? '#FF00FF' :
		'#000000'; 
};
var MarkerOptions = {
	radius: 8,
	fillColor: "#ff7800",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};
function estilo_monumentos (feature) {
		return{
 			radius: 7,
			fillColor: colorPuntos(feature.properties.type), 
			color: colorPuntos(feature.properties.type), 
			weight: 1,
			opacity : 1,
 			fillOpacity : 0.8
	};
};