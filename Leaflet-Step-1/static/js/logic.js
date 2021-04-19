                    // day 1 activity 10
// Store our API endpoint inside queryUrl

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"; 
 
// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
// d3.json(queryUrl, function(data) {   
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);  // tara addition w/o abhiram
  console.log(data.features);
  

  function createFeatures(earthquakeData) {

    function onEachFeature(feature, layer) {
      layer.bindPopup("<h3>" + feature.properties.place +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    }
  
    function radiusSize(magnitude) {
      return magnitude * 20000;
    }

  






  // Define map layer
  // Define variables for our tile layers
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

  // Define a baseMaps object to hold our base layers
  // var baseMaps = {
  //   "Lightmap": lightmap,
    // "Dark Map": darkmap
  // };
// console.log(baseMaps);
  // Create overlay object to hold our overlay layer
  // var overlayMaps = {
  //   Earthquakes: earthquakes
  // };

  // Create our map of San Francisco, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("mapid", {
    center: [37.09, -122.42],
    zoom: 3,
    layers: [lightmap]
  });

// // // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < data.features.length; i++) {

// //   // Conditionals for countries points
//   // var color = "";
//   var depth = data.features[i].geometry.coordinates[2];
//   // console.log(depth);
//   if (depth > 5) {
//     depth = "yellow";
//   }
//   else if (depth > 4) {
//     depth = "blue";
//   }
//   else if (depth > 3) {
//     depth = "green";
//   }
//   else if (depth > 2) {
//     depth = "green";
//   }
//   else {
//     depth = "red";
//   }

//   coordinates = data.features[i].geometry.coordinates.slice(0,2);
//   // console.log(coordinates);
//   // radius is earthquake magnitute
//   // radius = data.features[i].properties.mag;
// //   console.log(radius);

//   // Add circles to map
//   L.circle(data.features[i].coordinates, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: depth,
//     // Adjust radius
//     // radius: data.features[i].radius, * 1500
//     radius: data.features[i].properties.mag * 1500
//   }).bindPopup("<h1>" + data.features[i].coordinates + "</h1> <hr> <h3>Points: " + data.features[i].properties.mag + "</h3>").addTo(myMap);
// }
//   // Create a layer control
//   // Add the layer control to the map
//   L.control.layers(lightmap, {
//     collapsed: false
//   }).addTo(myMap);

//   })
