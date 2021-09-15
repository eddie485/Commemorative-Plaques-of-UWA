mapboxgl.accessToken = 'pk.eyJ1IjoiY29tbWVtb3JhdGl2ZS1wbGFxdWVzLW9mLXV3YSIsImEiOiJja3N4Y3p4M3owYmI4MnNwMmxqcmptbnpxIn0.viaDBFBPyZe6hpYUDP7q-A';
// Display a map of UWA
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL or use 'mapbox://styles/mapbox/streets-v11' for non satelite
    center: [115.8181, -31.9805], // starting position [longitude, latitude]
    zoom: 16 // starting zoom 
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
var geolocate =
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },

//map.addControl(
    //new mapboxgl.GeolocateControl({
    //positionOptions: {
    //enableHighAccuracy: true
    //},

    // When active the map will receive updates to the device's location as it changes.
    //trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })

    //})
    //);

map.addControl(geolocate);
map.on('load', function() {
    geolocate.trigger(); //<- Automatically activates geolocation
	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError, {
			// Instruct the browser to obtain a high-precision location，default false
			enableHighAcuracy: true,
			// Specify the timeout time for obtaining the geographic location, the default is unlimited, the unit is milliseconds
			timeout: 5000,
			// The maximum validity period. This parameter specifies how long to obtain the location again when repeatedly obtaining the location.
			maximumAge: 3000
		});
	}else{
		console.log("The browser cannot get your location");
	}
});

function showPosition(position) {
	console.log(position.coords.latitude + "   "
			+ position.coords.longitude)
	 map.setCenter(position.coords.longitude, position.coords.latitude)
}
function showError(error) {
	console.log(error)
}
