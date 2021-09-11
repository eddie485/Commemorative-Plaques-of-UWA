var color1 = "#27348b"

// extend mapboxGL class so we can edit the click function
class CustomMarker extends mapboxgl.Marker {
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


new CustomMarker({ color: color1 })
        .setLngLat([115.818118, -31.978412])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Queen_And_Duke.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.818118, -31.978412])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Arts_Building.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.818607, -31.978105])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.The_Charioteer.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819282, -31.977331])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.The_Octagon_Theatre.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819077, -31.977245])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.The_Black_Stump.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819083, -31.977239])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Dolphin_Theatre.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.820474, -31.976775])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Percy_Grainger.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.820009, -31.976649])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Integrata.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.820008, -31.976651])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Eileen_Joyce.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819028, -31.976931])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.The_Dancer_and_Emma.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);


new CustomMarker({ color: color1 })
        .setLngLat([115.819341, -31.978653])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Sundial.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);
