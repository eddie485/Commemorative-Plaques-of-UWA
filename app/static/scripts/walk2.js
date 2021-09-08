var color2 = "#e2b600"

// create the popup
const foxLT = new mapboxgl.Popup({ offset: 25 }).setText(
    'Fox Lecture Theatre'
    );

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.818687, -31.978687])
    .setPopup(foxLT) // sets a popup on this marker
    .addTo(map);
    
// create the popup
const alexanderLT = new mapboxgl.Popup({ offset: 25 }).setText(
    'Alexander Lecture Theatre'
    );

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.818187, -31.978437])
    .setPopup(alexanderLT) // sets a popup on this marker
    .addTo(map);

// create the popup
const murdochLT = new mapboxgl.Popup({ offset: 25 }).setText(
    'Murdoch Lecture Theatre'
    );

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.818562, -31.978687])
    .setPopup(murdochLT) // sets a popup on this marker
    .addTo(map);

// create the popup
const reidL = new mapboxgl.Popup({ offset: 25 })
    .setHTML("<img src='../images/reid.jpg'></img>");
    //.setHTML("<img src=https://www.freeimages.com/photo/wood-seesaw-for-4x4-training-1633319></img>")
    //.setHTML("<img src=url('../images/reid.jpg')></img>");
    //.setHTML(<img class="d-block w-100" src= "{{ url_for('static', filename='images/reid.jpg')}}" alt="First slide"></img>);
    //.setHTML("<img src= {{ url_for('static', filename='images/reid.jpg')}}></img>");
    

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.817813, -31.978938])
    .setPopup(reidL) // sets a popup on this marker
    .addTo(map);

// create the popup
const rossLT = new mapboxgl.Popup({ offset: 25 }).setText(
    'Ross Lecture Theatre'
    );

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.816937, -31.978563])
    .setPopup(rossLT) // sets a popup on this marker
    .addTo(map);

// create the popup
const weatherburnLT = new mapboxgl.Popup({ offset: 25 }).setText(
    'Weatherburn Lecture Theatre'
    ); 

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.816563, -31.979188])
    .setPopup(weatherburnLT) // sets a popup on this marker
    .addTo(map);

// create the popup
const irwinSt = new mapboxgl.Popup({ offset: 25 }).setText(
    'Irwin St Building'
    ); 

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.817037, -31.979900])
    .setPopup(irwinSt) // sets a popup on this marker
    .addTo(map);

// create the popup
const jamesOval = new mapboxgl.Popup({ offset: 25 }).setText(
    'James Oval'
    ); 

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.817813, -31.980187])
    .setPopup(jamesOval) // sets a popup on this marker
    .addTo(map);

// create the popup
const tattersallLT = new mapboxgl.Popup({ offset: 25 }).setText(
    'Tattersall Lecture Theatre'
    );

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.818562, -31.981437])
    .setPopup(tattersallLT) // sets a popup on this marker
    .addTo(map);

// create the popup
const baylissBldng = new mapboxgl.Popup({ offset: 25 }).setText(
    'Bayliss Building'
    );

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.818438, -31.982062])
    .setPopup(baylissBldng) // sets a popup on this marker
    .addTo(map);

// create the popup
const cameronHall = new mapboxgl.Popup({ offset: 25 }).setText(
    'Cameron Hall'
    );

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.819812, -31.981063])
    .setPopup(cameronHall) // sets a popup on this marker
    .addTo(map);

// create the popup
const beasleyLaw = new mapboxgl.Popup({ offset: 25 }).setText(
    'Beasley Law Building'
    ); 

// Create a new marker.
new mapboxgl.Marker( { color: color2 } )
    .setLngLat([115.819812, -31.979563])
    .setPopup(beasleyLaw) // sets a popup on this marker
    .addTo(map);





