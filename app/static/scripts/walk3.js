var color1 = "#e2b600"

new CustomMarker({ color: color1 })
        .setLngLat([115.820092788849, -31.9824709476961])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Underwood.Description;
                  var picture1 = '/static/images/'+sites.Underwood.FilePath1;
                  var picture2 = '/static/images/'+sites.Underwood.FilePath2;
                  var picture3 = '/static/images/'+sites.Underwood.FilePath3;
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
        .setLngLat([115.819063839072, -31.9825061941557])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Prescott_Court.Description;
                  var picture1 = '/static/images/'+sites.Prescott_Court.FilePath1;
                  var picture2 = '/static/images/'+sites.Prescott_Court.FilePath2;
                  var picture3 = '/static/images/'+sites.Prescott_Court.FilePath3;
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
        .setLngLat([115.819967824128, -31.9829062327725])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Agriculture_Department.Description;
                  var picture1 = '/static/images/'+sites.Agriculture_Department.FilePath1;
                  var picture2 = '/static/images/'+sites.Agriculture_Department.FilePath2;
                  var picture3 = '/static/images/'+sites.Agriculture_Department.FilePath3;
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
        .setLngLat([115.820325263026, -31.9828828069579])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Bilya_Marlee.Description;
                  var picture1 = '/static/images/'+sites.Bilya_Marlee.FilePath1;
                  var picture2 = '/static/images/'+sites.Bilya_Marlee.FilePath2;
                  var picture3 = '/static/images/'+sites.Bilya_Marlee.FilePath3;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture3) 
                  $("#Content").html(description);
                  $("#Carousel").show();
                });
        })
        .addTo(map);