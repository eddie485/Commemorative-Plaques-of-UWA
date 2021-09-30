var color1 = "#e2b600"

new CustomMarker({ color: color1 })
        .setLngLat([115.818189729916, -31.9782788741746])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Agriculture_Department.Description;
                  var picture1 = '/static/images/'+sites.Agriculture_Department.FilePath1;
                  var picture2 = '/static/images/'+sites.Agriculture_Department.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Content").html(description);
                  $("#Carousel").show();
                });
        })
        .addTo(map);