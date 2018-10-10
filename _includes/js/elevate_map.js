mapboxgl.accessToken = 'pk.eyJ1IjoiZHVua2lubmVhciIsImEiOiJjaWhsem4wc3gwMGR0dXNrcTR6MzM5MTBxIn0.iaTcLkEWIM8R6YtDpHWG5A';

// "https://api.mapbox.com/styles/v1/dunkinnear/cjn1rdo7e0wah2sobyumz0wfw.html?fresh=true&title=true&access_token=pk.eyJ1IjoiZHVua2lubmVhciIsImEiOiJjaWhsem4wc3gwMGR0dXNrcTR6MzM5MTBxIn0.iaTcLkEWIM8R6YtDpHWG5A#3.4/40.554095/-101.013553/0"
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  
  center: [-104.19, 47.77],
  zoom: 10
});
map.on('load', function() {
  map.addLayer({
    id: 'raster-layer',
    type: 'raster',
    source: {
      type: 'raster',
      tiles: ['https://api.mapbox.com/v4/dunkinnear.0cbyyc77/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZHVua2lubmVhciIsImEiOiJjaWhsem4wc3gwMGR0dXNrcTR6MzM5MTBxIn0.iaTcLkEWIM8R6YtDpHWG5A'],
    },
    minzoom: 0,
    maxzoom: 22
  });
});
map.addControl(new mapboxgl.FullscreenControl());

// alert("WORKING");