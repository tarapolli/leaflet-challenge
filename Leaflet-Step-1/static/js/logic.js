                    // day 1 activity 10
// Store our API endpoint inside queryUrl
// var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
//   "2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"; 
 
  
// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
// d3.json(queryUrl, function(data) {   
  // Once we get a response, send the data.features object to the createFeatures function
  console.log(data.features);
  
  // Define streetmap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY })
  
//   var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "dark-v10",
//     accessToken: API_KEY
//   });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    // "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  // var overlayMaps = {
  //   Earthquakes: earthquakes
  // };

  // Create our map of San Francisco, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("mapid", {
    center: [
      37.09, -122.42
    ],
    zoom: 3,
    layers: [streetmap]
  });

// // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < data.features.length; i++) {

//   // Conditionals for countries points
//   // var color = "";
//   var color = data.features[i].geometry.coordinates[2];
// //   console.log(color);
//   if (color < 50) {
//     color = "yellow";
//   }
//   else if (color < 75) {
//     color = "blue";
//   }
//   else if (color <200) {
//     color = "green";
//   }
//   else {
//     color = "red";
//   }

//   coordinates = data.features[i].geometry.coordinates.slice(0,2)
//   console.log(coordinates);
  // radius is earthquake magnitute
  // radius = data.features[i].properties.mag;
  // console.log(radius);

//   // Add circles to map
//   L.circle(data.features.coordinates, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: color,
//     // Adjust radius
//     // radius: data.features[i].radius, * 1500
//     radius: data.features[i].properties.mag, * 1500
//   }).bindPopup("<h1>" + data.features[i].coordinates + "</h1> <hr> <h3>Points: " + data.features[i].properties.mag + "</h3>").addTo(myMap);
// }

//   // Create a layer control
//   // Pass in our baseMaps and overlayMaps
//   // Add the layer control to the map
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);

// })



})