var color1 = "#e2b600"

new CustomMarker({ color: color1 })
        .setLngLat([115.818189729916, -31.9782788741746])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Queen_And_Duke.Description;
                  var picture1 = '/static/images/'+sites.Queen_And_Duke.FilePath1;
                  var picture2 = '/static/images/'+sites.Queen_And_Duke.FilePath2;
                  var picture3 = '/static/images/'+sites.Queen_And_Duke.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3) 
                  $("#Content").html(description);
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.818447335079, -31.9783623411497])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Arts_Building.Description;
                  var picture1 = '/static/images/'+sites.Arts_Building.FilePath1;
                  var picture2 = '/static/images/'+sites.Arts_Building.FilePath2;
                  var picture3 = '/static/images/'+sites.Arts_Building.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3)
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.818551982921, -31.9781293694534])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.The_Charioteer.Description;
                  var picture1 = '/static/images/'+sites.The_Charioteer.FilePath1;
                  var picture2 = '/static/images/'+sites.The_Charioteer.FilePath2;
                  var picture3 = '/static/images/'+sites.The_Charioteer.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3) 
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819117490495, -31.9774211351355])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.The_Octagon_Theatre.Description;
                  var picture1 = '/static/images/'+sites.The_Octagon_Theatre.FilePath1;
                  var picture2 = '/static/images/'+sites.The_Octagon_Theatre.FilePath2;
                  var picture3 = '/static/images/'+sites.The_Octagon_Theatre.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3) 
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.818981014125, -31.9774659015759])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.The_Black_Stump.Description;
                  var picture1 = '/static/images/'+sites.The_Black_Stump.FilePath1;
                  var picture2 = '/static/images/'+sites.The_Black_Stump.FilePath2;
                  var picture3 = '/static/images/'+sites.The_Black_Stump.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3) 
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819353630895, -31.9769529928087])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Dolphin_Theatre.Description;
                  var picture1 = '/static/images/'+sites.Dolphin_Theatre.FilePath1;
                  var picture2 = '/static/images/'+sites.Dolphin_Theatre.FilePath2;
                  var picture2 = '/static/images/'+sites.Dolphin_Theatre.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3)
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819837680999, -31.9769150133679])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Somerville_Auditorium.Description;
                  var picture1 = '/static/images/'+sites.Somerville_Auditorium.FilePath1;
                  var picture2 = '/static/images/'+sites.Somerville_Auditorium.FilePath2;
                  var picture3 = '/static/images/'+sites.Somerville_Auditorium.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3) 
                  $("#Carousel").show();
                });
        })
        .addTo(map);


new CustomMarker({ color: color1 })
        .setLngLat([115.820423923079, -31.9766986366639])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Percy_Grainger.Description;
                  var picture1 = '/static/images/'+sites.Percy_Grainger.FilePath1;
                  var picture2 = '/static/images/'+sites.Percy_Grainger.FilePath2;
                  var picture3 = '/static/images/'+sites.Percy_Grainger.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3) 
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.820103985951, -31.9766370620526])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Eileen_Joyce.Description;
                  var picture1 = '/static/images/'+sites.Eileen_Joyce.FilePath1;
                  var picture2 = '/static/images/'+sites.Eileen_Joyce.FilePath2;
                  var picture3 = '/static/images/'+sites.Eileen_Joyce.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3)
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color1 })
        .setLngLat([115.819028, -31.976931])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.The_Dancer_and_Emma.Description;
                  var picture1 = '/static/images/'+sites.The_Dancer_and_Emma.FilePath1;
                  var picture2 = '/static/images/'+sites.The_Dancer_and_Emma.FilePath2;
                  var picture3 = '/static/images/'+sites.The_Dancer_and_Emma.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3) 
                  $("#Carousel").show();
                });
        })
        .addTo(map);


new CustomMarker({ color: color1 })
        .setLngLat([115.819170196618, -31.9786215907417])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Sundial.Description;
                  var picture1 = '/static/images/'+sites.Sundial.FilePath1;
                  var picture2 = '/static/images/'+sites.Sundial.FilePath2;
                  var picture3 = '/static/images/'+sites.Sundial.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3) 
                  $("#Carousel").show();
                });
        })
        .addTo(map);
