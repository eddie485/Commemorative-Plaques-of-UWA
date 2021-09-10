var color2 = "#e2b600"

// extend mapboxGL Marker so we can pass in an onClick handler
    class ClickableMarker extends mapboxgl.Marker {
      // new method onClick, sets _handleClick to a function you pass in
      onClick(handleClick) {
        this._handleClick = handleClick;
        return this;
      }

      // the existing _onMapClick was there to trigger a popup
      // but we are hijacking it to run a function we define
      _onMapClick(e) {
        const targetElement = e.originalEvent.target;
        const element = this._element;

        if (this._handleClick && (targetElement === element || element.contains((targetElement)))) {
          this._handleClick();
        }
      }
    };


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


    // Create a new marker.
    new ClickableMarker({ color: color2 })
            .setLngLat([115.817813, -31.978938])
            .onClick(() => { // onClick() is a thing now!

                    $.getJSON("../static/sites.json",function(sites){
                      var bob = "Fox Lecture Theatre";
                      var safbgfgd = sites.Fox_Lecture_Theatre.Description;
                      $('#Site').empty();
                      $('#Stuff').empty();
                      $('#Site').append(bob);
                      $('#Stuff').append(safbgfgd);
                    });
            })
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
