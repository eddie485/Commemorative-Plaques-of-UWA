var color2 = "#27348b"
var count = 0;
var currentMarker = "";

$.getJSON("../static/sites.json",function(sites){
    // create a HTML element for each feature
    const el4 = document.createElement('div');
    el4.className = 'marker marker4';
    el4.id = "marker4";
    el4.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el4)
    .setLngLat([115.817784628967, -31.9786905168583])
    .onClick(() => { //when clicked, define the following function
            $.getJSON("../static/sites.json",function(sites){
              var description = sites.Reid_Library.Description;
              var picture1 = '/static/images/'+sites.Reid_Library.FilePath1;
              var picture2 = '/static/images/'+sites.Reid_Library.FilePath2;
              var picture3 = '/static/images/'+sites.Reid_Library.FilePath3;
              $("#Content").html(description);
              $("#image1").attr("src", picture1)
              $("#image2").attr("src", picture2)
              $("#image3").attr("src", picture3) 
              $("#Carousel").show();
                      if(currentMarker == "")
                      {
                        currentMarker = "marker4";
                        $('#marker4').removeClass("marker marker4").addClass('marker marker4b');
                      }
                      else
                      {
                        $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                        currentMarker = "marker4";
                        $('#marker4').removeClass("marker marker4").addClass('marker marker4b');
                      }
                    });
                count = 4;
                console.log(count);
                document.getElementById("next").style.display = "block";
                document.getElementById("prev").style.display = "block";
            })
                .addTo(map);

    const el1 = document.createElement('div');
    el1.className = 'marker marker1';
    el1.id = "marker1";
    el1.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el1)
    .setLngLat([115.818651293445, -31.9787159921767])
    .onClick(() => { //when clicked, define the following function
            $.getJSON("../static/sites.json",function(sites){
              var description = sites.Fox_Lecture_Theatre.Description;
              var picture1 = '/static/images/'+sites.Fox_Lecture_Theatre.FilePath1;
              var picture2 = '/static/images/'+sites.Fox_Lecture_Theatre.FilePath2;
              var picture3 = '/static/images/'+sites.Fox_Lecture_Theatre.FilePath3;
              $("#Content").html(description);
              $("#image1").attr("src", picture1)
              $("#image2").attr("src", picture2)
              $("#image3").attr("src", picture3) 
              $("#Carousel").show();
                      if(currentMarker == "")
                      {
                        currentMarker = "marker1";
                        $('#marker1').removeClass("marker marker1").addClass('marker marker1b');
                      }
                      else
                      {
                        $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                        currentMarker = "marker1";
                        $('#marker1').removeClass("marker marker1").addClass('marker marker1b');
                      }
                    });
            count = 1;
            console.log(count);
            document.getElementById("next").style.display = "block";
            document.getElementById("prev").style.display = "none";
        })
            .addTo(map);

    const el3 = document.createElement('div');
    el3.className = 'marker marker3';
    el3.id = "marker3";
    el3.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el3)
    .setLngLat([115.818487783993, -31.9783670570613])
    .onClick(() => { //when clicked, define the following function
            $.getJSON("../static/sites.json",function(sites){
              var description = sites.Alexander_Lecture_Theatre.Description;
              var picture1 = '/static/images/'+sites.Alexander_Lecture_Theatre.FilePath1;
              var picture2 = '/static/images/'+sites.Alexander_Lecture_Theatre.FilePath2;
              var picture3 = '/static/images/'+sites.Alexander_Lecture_Theatre.FilePath3;
              $("#Content").html(description);
              $("#image1").attr("src", picture1)
              $("#image2").attr("src", picture2)
              $("#image3").attr("src", picture3) 
              $("#Carousel").show();
                      if(currentMarker == "")
                      {
                        currentMarker = "marker3";
                        $('#marker3').removeClass("marker marker3").addClass('marker marker3b');
                      }
                      else
                      {
                        $('#' + currentMarker).removeClass("marker" + " "  + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                        currentMarker = "marker3";
                        $('#marker3').removeClass("marker marker3").addClass('marker marker3b');
                      }
                    });
                    count = 3;
                    console.log(count);
                    document.getElementById("next").style.display = "block";
                    document.getElementById("prev").style.display = "block";
            })
            .addTo(map);

    const el2 = document.createElement('div');
    el2.className = 'marker marker2';
    el2.id = "marker2";
    el2.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el2)
    .setLngLat([115.818497494761, -31.9786055507042])
    .onClick(() => { //when clicked, define the following function
            $.getJSON("../static/sites.json",function(sites){
              var description = sites.Murdoch_Lecture_Theatre.Description;
              var picture1 = '/static/images/'+sites.Murdoch_Lecture_Theatre.FilePath1;
              var picture2 = '/static/images/'+sites.Murdoch_Lecture_Theatre.FilePath2;
              var picture3 = '/static/images/'+sites.Murdoch_Lecture_Theatre.FilePath3;
              $("#Content").html(description);
              $("#image1").attr("src", picture1)
              $("#image2").attr("src", picture2)
              $("#image3").attr("src", picture3) 
              $("#Carousel").show();
                      if(currentMarker == "")
                      {
                        currentMarker = "marker2";
                        $('#marker2').removeClass("marker marker2").addClass('marker marker2b');
                      }
                      else
                      {
                        $('#' + currentMarker).removeClass("marker" + " "  + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                        currentMarker = "marker2";
                        $('#marker2').removeClass("marker marker2").addClass('marker marker2b');
                      }
                    });
                    count = 2;
                    console.log(count);
                    document.getElementById("next").style.display = "block";
                    document.getElementById("prev").style.display = "block";
            })
            .addTo(map);


            const el5 = document.createElement('div');
            el5.className = 'marker marker5';
            el5.id = "marker5";
            el5.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el5)
            .setLngLat([115.817100980095, -31.9785249786282])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Ross_Lecture_Theatre.Description;
                      var picture1 = '/static/images/'+sites.Ross_Lecture_Theatre.FilePath1;
                      var picture2 = '/static/images/'+sites.Ross_Lecture_Theatre.FilePath2;
                      var picture3 = '/static/images/'+sites.Ross_Lecture_Theatre.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture3) 
                      $("#Carousel").show();
                              if(currentMarker == "")
                              {
                                currentMarker = "marker5";
                                $('#marker5').removeClass("marker marker5").addClass('marker marker5b');
                              }
                              else
                              {
                                $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                                currentMarker = "marker5";
                                $('#marker5').removeClass("marker marker5").addClass('marker marker5b');
                              }
                            });
                            count = 5;
                            console.log(count);
                            document.getElementById("next").style.display = "block";
                            document.getElementById("prev").style.display = "block";
                    })
                    .addTo(map);

            const el6 = document.createElement('div');
            el6.className = 'marker marker6';
            el6.id = "marker6";
            el6.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el6)
            .setLngLat([115.816735887862, -31.9791823044732])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Weatherburn_Lecture_Theatre.Description;
                      var picture1 = '/static/images/'+sites.Weatherburn_Lecture_Theatre.FilePath1;
                      var picture2 = '/static/images/'+sites.Weatherburn_Lecture_Theatre.FilePath2;
                      var picture3 = '/static/images/'+sites.Weatherburn_Lecture_Theatre.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture3) 
                      $("#Carousel").show();
                              if(currentMarker == "")
                              {
                                currentMarker = "marker6";
                                $('#marker6').removeClass("marker marker6").addClass('marker marker6b');
                              }
                              else
                              {
                                $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                                currentMarker = "marker6";
                                $('#marker6').removeClass("marker marker6").addClass('marker marker6b');
                              }
                            });
                            count = 6;
                            console.log(count);
                            document.getElementById("next").style.display = "block";
                            document.getElementById("prev").style.display = "block";
                    })
                    .addTo(map);

            const el7 = document.createElement('div');
            el7.className = 'marker marker7';
            el7.id = "marker7";
            el7.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el7)
            .setLngLat([115.817126494477, -31.9797999115144])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Irwin_St_Building.Description;
                      var picture1 = '/static/images/'+sites.Irwin_St_Building.FilePath1;
                      var picture2 = '/static/images/'+sites.Irwin_St_Building.FilePath2;
                      var picture3 = '/static/images/'+sites.Irwin_St_Building.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture3) 
                      $("#Carousel").show();
                              if(currentMarker == "")
                              {
                                currentMarker = "marker7";
                                $('#marker7').removeClass("marker marker7").addClass('marker marker7b');
                              }
                              else
                              {
                                $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                                currentMarker = "marker7";
                                $('#marker7').removeClass("marker marker7").addClass('marker marker7b');
                              }
                            });
                    })
                    .addTo(map);



            const el8 = document.createElement('div');
            el8.className = 'marker marker8';
            el8.id = "marker8";
            el8.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el8)
            .setLngLat([115.817948589614, -31.9802256335239])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.James_Oval.Description;
                      var picture1 = '/static/images/'+sites.James_Oval.FilePath1;
                      var picture2 = '/static/images/'+sites.James_Oval.FilePath2;
                      var picture3 = '/static/images/'+sites.James_Oval.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture3) 
                      $("#Carousel").show();
                              if(currentMarker == "")
                              {
                                currentMarker = "marker8";
                                $('#marker8').removeClass("marker marker8").addClass('marker marker8b');
                              }
                              else
                              {
                                $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                                currentMarker = "marker8";
                                $('#marker8').removeClass("marker marker8").addClass('marker marker8b');
                              }
                            });
                            count = 8;
                            console.log(count);
                            document.getElementById("next").style.display = "block";
                            document.getElementById("prev").style.display = "block";
                    })
                    .addTo(map);

            const el9 = document.createElement('div');
            el9.className = 'marker marker9';
            el9.id = "marker9";
            el9.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el9)
            .setLngLat([115.818596792117, -31.9812862554056])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Tattersall_Lecture_Theatre.Description;
                      var picture1 = '/static/images/'+sites.Tattersall_Lecture_Theatre.FilePath1;
                      var picture2 = '/static/images/'+sites.Tattersall_Lecture_Theatre.FilePath2;
                      var picture3 = '/static/images/'+sites.Tattersall_Lecture_Theatre.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture3) 
                      $("#Carousel").show();
                              if(currentMarker == "")
                              {
                                currentMarker = "marker9";
                                $('#marker9').removeClass("marker marker9").addClass('marker marker9b');
                              }
                              else
                              {
                                $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                                currentMarker = "marker9";
                                $('#marker9').removeClass("marker marker9").addClass('marker marker9b');
                              }
                            });
                            count = 9;
                            console.log(count);
                            document.getElementById("next").style.display = "block";
                            document.getElementById("prev").style.display = "block";
                    })
                    .addTo(map);


            const el10 = document.createElement('div');
            el10.className = 'marker marker10';
            el10.id = "marker10";
            el10.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el10)
            .setLngLat([115.818703320593, -31.9819275631693])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Bayliss_Building.Description;
                      var picture1 = '/static/images/'+sites.Bayliss_Building.FilePath1;
                      var picture2 = '/static/images/'+sites.Bayliss_Building.FilePath2;
                      var picture3 = '/static/images/'+sites.Bayliss_Building.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture3) 
                      $("#Carousel").show();
                              if(currentMarker == "")
                              {
                                currentMarker = "marker10";
                                $('#marker10').removeClass("marker marker10").addClass('marker marker10b');
                              }
                              else
                              {
                                $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                                currentMarker = "marker10";
                                $('#marker10').removeClass("marker marker10").addClass('marker marker10b');
                              }
                            });
                            count = 10;
                            console.log(count);
                            document.getElementById("next").style.display = "block";
                            document.getElementById("prev").style.display = "block";
                    })
                    .addTo(map);


            const el11 = document.createElement('div');
            el11.className = 'marker marker11';
            el11.id = "marker11";
            el11.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el11)
            .setLngLat([115.819832699563, -31.9810696951577])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Cameron_Hall.Description;
                      var picture1 = '/static/images/'+sites.Cameron_Hall.FilePath1;
                      var picture2 = '/static/images/'+sites.Cameron_Hall.FilePath2;
                      var picture3 = '/static/images/'+sites.Cameron_Hall.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture3)
                      $("#Carousel").show();
                              if(currentMarker == "")
                              {
                                currentMarker = "marker11";
                                $('#marker11').removeClass("marker marker11").addClass('marker marker11b');
                              }
                              else
                              {
                                $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                                currentMarker = "marker11";
                                $('#marker11').removeClass("marker marker11").addClass('marker marker11b');
                              }
                            });
                            count = 11;
                            console.log(count);
                            document.getElementById("next").style.display = "block";
                            document.getElementById("prev").style.display = "block";
                    })
                    .addTo(map);

            const el12 = document.createElement('div');
            el12.className = 'marker marker12';
            el12.id = "marker12";
            el12.style.marginTop = '-'+(36/2)+'px';
            new CustomMarker(el12)
            .setLngLat([115.81969567367, -31.9795841426999])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Beasley_Law_Building.Description;
                      var picture1 = '/static/images/'+sites.Beasley_Law_Building.FilePath1;
                      var picture2 = '/static/images/'+sites.Beasley_Law_Building.FilePath2;
                      var picture3 = '/static/images/'+sites.Beasley_Law_Building.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture3)
                      $("#Carousel").show();
                              if(currentMarker == "")
                              {
                                currentMarker = "marker12";
                                $('#marker12').removeClass("marker marker12").addClass('marker marker12b');
                              }
                              else
                              {
                                $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                                currentMarker = "marker12";
                                $('#marker12').removeClass("marker marker12").addClass('marker marker12b');
                              }
                            });
                            count = 12;
                            console.log(count);
                            document.getElementById("next").style.display = "none";
                            document.getElementById("prev").style.display = "block";
                    })
                    .addTo(map);
                });