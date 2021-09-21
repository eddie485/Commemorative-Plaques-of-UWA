var color2 = "#27348b"


new CustomMarker({ color: color2 })
        .setLngLat([115.817784628967, -31.9786905168583])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Reid_Library.Description;
                  var picture1 = '/static/images/'+sites.Reid_Library.FilePath1;
                  var picture2 = '/static/images/'+sites.Reid_Library.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.818651293445, -31.9787159921767])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Fox_Lecture_Theatre.Description;
                  var picture1 = '/static/images/'+sites.Fox_Lecture_Theatre.FilePath1;
                  var picture2 = '/static/images/'+sites.Fox_Lecture_Theatre.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);


new CustomMarker({ color: color2 })
        .setLngLat([115.818487783993, -31.9783670570613])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Alexander_Lecture_Theatre.Description;
                  var picture1 = '/static/images/'+sites.Alexander_Lecture_Theatre.FilePath1;
                  var picture2 = '/static/images/'+sites.Alexander_Lecture_Theatre.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.818497494761, -31.9786055507042])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Murdoch_Lecture_Theatre.Description;
                  var picture1 = '/static/images/'+sites.Murdoch_Lecture_Theatre.FilePath1;
                  var picture2 = '/static/images/'+sites.Murdoch_Lecture_Theatre.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.817100980095, -31.9785249786282])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Ross_Lecture_Theatre.Description;
                  var picture1 = '/static/images/'+sites.Ross_Lecture_Theatre.FilePath1;
                  var picture2 = '/static/images/'+sites.Ross_Lecture_Theatre.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.816735887862, -31.9791823044732])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Weatherburn_Lecture_Theatre.Description;
                  var picture1 = '/static/images/'+sites.Weatherburn_Lecture_Theatre.FilePath1;
                  var picture2 = '/static/images/'+sites.Weatherburn_Lecture_Theatre.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);


new CustomMarker({ color: color2 })
        .setLngLat([115.817126494477, -31.9797999115144])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Irwin_St_Building.Description;
                  var picture1 = '/static/images/'+sites.Irwin_St_Building.FilePath1;
                  var picture2 = '/static/images/'+sites.Irwin_St_Building.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.817948589614, -31.9802256335239])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.James_Oval.Description;
                  var picture1 = '/static/images/'+sites.James_Oval.FilePath1;
                  var picture2 = '/static/images/'+sites.James_Oval.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.818596792117, -31.9812862554056])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Tattersall_Lecture_Theatre.Description;
                  var picture1 = '/static/images/'+sites.Tattersall_Lecture_Theatre.FilePath1;
                  var picture2 = '/static/images/'+sites.Tattersall_Lecture_Theatre.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.818703320593, -31.9819275631693])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Bayliss_Building.Description;
                  var picture1 = '/static/images/'+sites.Bayliss_Building.FilePath1;
                  var picture2 = '/static/images/'+sites.Bayliss_Building.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.819832699563, -31.9810696951577])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Cameron_Hall.Description;
                  var picture1 = '/static/images/'+sites.Cameron_Hall.FilePath1;
                  var picture2 = '/static/images/'+sites.Cameron_Hall.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);

new CustomMarker({ color: color2 })
        .setLngLat([115.81969567367, -31.9795841426999])
        .onClick(() => { //when clicked, define the following function
                $.getJSON("../static/sites.json",function(sites){
                  var description = sites.Beasley_Law_Building.Description;
                  
                  var picture1 = '/static/images/'+sites.Beasley_Law_Building.FilePath1;
                  var picture2 = '/static/images/'+sites.Beasley_Law_Building.FilePath2;
                  $("#Content").html(description);
                  $("#image1").attr("src", picture1)
                  $("#image2").attr("src", picture2)
                  $("#image3").attr("src", picture2) //just pic2 for now
                  $("#Carousel").show();
                });
        })
        .addTo(map);
