mapboxgl.accessToken = 'pk.eyJ1IjoiY29tbWVtb3JhdGl2ZS1wbGFxdWVzLW9mLXV3YSIsImEiOiJja3N4Y3p4M3owYmI4MnNwMmxqcmptbnpxIn0.viaDBFBPyZe6hpYUDP7q-A';;
// Display a map of UWA

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL,

    center: [115.8195, -31.9833], // starting position [longitude, latitude]
    zoom: 17.5 // starting zoom
});

// Set bounds to UWA, Crawley Campus.
const bounds = [
    [115.8081, -31.9889], // [west, south]
    [115.8281, -31.9729]  // [east, north]
];
// Set the map's max bounds.
//map.setMaxBounds(bounds);

// disable map rotation using right click + drag
map.dragRotate.disable();

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
    },
     //When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    //When false it will not draw the degree of error around the devices location, not covering any icons.
    showAccuracyCircle: false,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
);

map.on('styledata', function () {
    // Triggered when `setStyle` is called.
    
    map.addSource('bilya', {
      'type': 'geojson',
      'data': '../static/scripts/bilya.geojson'
      });
  
      map.addLayer({
          'id': 'bilya',
          'type': 'line',
          'source': 'bilya',
          'layout': {
              'line-join': 'round',
              'line-cap': 'round'
          },
          'paint': {
              'line-color': '#e2b600',
              'line-width': 4
          }
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const layerList = document.getElementById('menu');
    const inputs = layerList.getElementsByTagName('input');

    for (const input of inputs) {
        input.onclick = (layer) => {
            const layerId = layer.target.id;
            map.setStyle('mapbox://styles/mapbox/' + layerId);
        };
    };
});