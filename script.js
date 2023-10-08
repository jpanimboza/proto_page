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
