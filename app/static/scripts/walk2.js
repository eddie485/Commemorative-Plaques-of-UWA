var color2 = "#e2b600"

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


new CustomMarker({ color: color2 })
        .setLngLat([115.817813, -31.978938])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Reid_Library.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.818687, -31.978687])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Fox_Lecture_Theatre.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.818187, -31.978437])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Alexander_Lecture_Theatre.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.818562, -31.978687])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Murdoch_Lecture_Theatre.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.816937, -31.978563])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Ross_Lecture_Theatre.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.816563, -31.979188])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Weatherburn_Lecture_Theatre.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.817037, -31.979900])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Irwin_St_Building.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.817813, -31.980187])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.James_Oval.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.818562, -31.981437])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Tattersall_Lecture_Theatre.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.818438, -31.982062])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Bayliss_Building.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.819812, -31.981063])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Cameron_Hall.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.819812, -31.979563])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Beasley_Law_Building.Description;
                  $("#Content").html(safbgfgd);
                });
        })
        .addTo(map);
