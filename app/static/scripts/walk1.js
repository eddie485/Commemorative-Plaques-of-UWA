var color1 = "#e2b600"

new CustomMarker({ color: color1 })
        .setLngLat([115.818189729916, -31.9782788741746])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Queen_And_Duke.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.818447335079, -31.9783623411497])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Arts_Building.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.818551982921, -31.9781293694534])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.The_Charioteer.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819117490495, -31.9774211351355])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.The_Octagon_Theatre.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.818981014125, -31.9774659015759])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.The_Black_Stump.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819353630895, -31.9769529928087])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Dolphin_Theatre.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819837680999, -31.9769150133679])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                        var safbgfgd = sites.Somerville_Auditorium.Description;
                        $("#Content").html(safbgfgd);
                        $("#Carousel").show();
                });
        })
        .addTo(map);

        
new CustomMarker({ color: color1 })
        .setLngLat([115.820423923079, -31.9766986366639])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Percy_Grainger.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.820103985951, -31.9766370620526])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Eileen_Joyce.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819028, -31.976931])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.The_Dancer_and_Emma.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);


new CustomMarker({ color: color1 })
        .setLngLat([115.819170196618, -31.9786215907417])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var safbgfgd = sites.Sundial.Description;
                  $("#Content").html(safbgfgd);
                  $("#Carousel").show();
                });
        })
        .addTo(map);
