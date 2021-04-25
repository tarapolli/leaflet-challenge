# leaflet-challenge:  Visualizing USGS Earthquake Data with Leaflet

Welcome to the United States Geological Survey (USGS). The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. 

As a Data Analyst, I will be assisting USGS to build a visualization tool using an earthquate data set, specifically 'All Earthquakes from the Past 7 Days' from their GeoJSON Feed page (https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization

Below outlines the steps I utilized to create the visualization:
1. Create a map using Leaflet that plots all of the earthquakes from the 'All Earthquakes from the Past 7 Days' data set based on longitude and latitude.
2. Create data markers that reflect the magnitude of the earthquake by their size and depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color. (NOTE: the depth of the earth can be found as the third coordinate for each earthquake.)
3. Include popups that provide location, magnitude and description.
4. Legend that provides context for the map data.

Please view at https://tarapolli.github.io/leaflet-challenge/
