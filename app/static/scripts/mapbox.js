mapboxgl.accessToken = 'pk.eyJ1IjoiY29tbWVtb3JhdGl2ZS1wbGFxdWVzLW9mLXV3YSIsImEiOiJja3N4Y3p4M3owYmI4MnNwMmxqcmptbnpxIn0.viaDBFBPyZe6hpYUDP7q-A';;
// Display a map of UWA

var satelite_map = 'mapbox://styles/mapbox/satellite-streets-v11'; //URL for satelite style map
var street_map = 'mapbox://styles/mapbox/streets-v11'; //URL for street style map

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: satelite_map,

    center: [115.8181, -31.9789], // starting position [longitude, latitude]
    zoom: 17 // starting zoom 
});

// Set bounds to UWA, Crawley Campus.
const bounds = [
    [115.8081, -31.9889], // [west, south]
    [115.8281, -31.9729]  // [east, north]
];
// Set the map's max bounds.
map.setMaxBounds(bounds);

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
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
    );


    map.on('load', () => {
        map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
        [115.818687, -31.978687], //Fox
        [115.818562, -31.978687], //Murdoch
        [115.818187, -31.978437], //Alexander
        [115.816937, -31.978563], //Ross
        [115.816563, -31.979188], //Weatherburn
        [115.817037, -31.979900], //Irwin St
        [115.817813, -31.980187], //James Oval
        [115.818562, -31.981437], //Tatersall
        [115.818438, -31.982062], //Bayliss
        [115.819812, -31.981063], //Cameron Hall
        [115.819812, -31.979563] //Beasley
        ]
        }
        }
        });
        map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#33C9EB',
        'line-width': 3
        }
        });
        });
