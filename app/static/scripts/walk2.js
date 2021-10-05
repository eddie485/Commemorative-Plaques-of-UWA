var color2 = "#27348b"

$.getJSON("../static/sites.json",function(sites){
    // create a HTML element for each feature
    const el1 = document.createElement('div');
    el1.className = 'marker marker4';
    // make a marker for each feature and add it to the map
    new CustomMarker(el1)
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

    const el2 = document.createElement('div');
    el2.className = 'marker marker1';
    // make a marker for each feature and add it to the map
    new CustomMarker(el2)
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

    const el3 = document.createElement('div');
    el3.className = 'marker marker3';
    // make a marker for each feature and add it to the map
    new CustomMarker(el3)
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

    const el4 = document.createElement('div');
    el4.className = 'marker marker2';
    // make a marker for each feature and add it to the map
    new CustomMarker(el4)
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


            const el5 = document.createElement('div');
            el5.className = 'marker marker5';
            // make a marker for each feature and add it to the map
            new CustomMarker(el5)
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

            const el6 = document.createElement('div');
            el6.className = 'marker marker6';
            // make a marker for each feature and add it to the map
            new CustomMarker(el6)
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

            const el7 = document.createElement('div');
            el7.className = 'marker marker7';
            // make a marker for each feature and add it to the map
            new CustomMarker(el7)
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



            const el8 = document.createElement('div');
            el8.className = 'marker marker8';
            // make a marker for each feature and add it to the map
            new CustomMarker(el8)
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

            const el9 = document.createElement('div');
            el9.className = 'marker marker9';
            // make a marker for each feature and add it to the map
            new CustomMarker(el9)
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


            const el10 = document.createElement('div');
            el10.className = 'marker marker10';
            // make a marker for each feature and add it to the map
            new CustomMarker(el10)
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


            const el11 = document.createElement('div');
            el11.className = 'marker marker11';
            // make a marker for each feature and add it to the map
            new CustomMarker(el11)
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

            const el12 = document.createElement('div');
            el12.className = 'marker marker12';
            new CustomMarker(el12)
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

});
