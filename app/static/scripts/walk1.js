var color1 = "#e2b600";
var currentMarker = "";


$.getJSON("../static/sites.json",function(sites){
    // create a HTML element for each feature
    const el1 = document.createElement('div');
    el1.className = 'marker marker1';
    el1.id = "marker1";                                                 //id for previous/next button clicking
    el1.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el1)
    .setLngLat([115.818189729916, -31.9782788741746])
    .onClick(() => { //when clicked, define the following function
            $.getJSON("../static/sites.json",function(sites){
              var description = sites.Queen_And_Duke.Description;
              var picture1 = '/static/images/'+sites.Queen_And_Duke.FilePath1;
              var picture2 = '/static/images/'+sites.Queen_And_Duke.FilePath2;
              $("#Content").html(description);
              $("#image1").attr("src", picture1)
              $("#image2").attr("src", picture2)
              $("#image3").attr("src", picture2) //just pic2 for now
              $("#Content").html(description);
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
    })
    .addTo(map);

    const el2 = document.createElement('div');
    el2.className = 'marker marker2';
    el2.id = "marker2";
    el2.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el2)
            .setLngLat([115.818447335079, -31.9783623411497])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Arts_Building.Description;
                      var picture1 = '/static/images/'+sites.Arts_Building.FilePath1;
                      var picture2 = '/static/images/'+sites.Arts_Building.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
                      $("#Carousel").show();
                      if(currentMarker == "")
                      {
                        currentMarker = "marker2";
                        $('#marker2').removeClass("marker marker2").addClass('marker marker2b');
                      }
                      else
                      {
                        $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                        currentMarker = "marker2";
                        $('#marker2').removeClass("marker marker2").addClass('marker marker2b');
                      }
                    });
            })
            .addTo(map);

    const el3 = document.createElement('div');
    el3.className = 'marker marker3';
    el3.id = "marker3";
    el3.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el3)
            .setLngLat([115.818551982921, -31.9781293694534])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.The_Charioteer.Description;
                      var picture1 = '/static/images/'+sites.The_Charioteer.FilePath1;
                      var picture2 = '/static/images/'+sites.The_Charioteer.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
                      $("#Carousel").show();
                      if(currentMarker == "")
                      {
                        currentMarker = "marker3";
                        $('#marker3').removeClass("marker marker3").addClass('marker marker3b');
                      }
                      else
                      {
                        $('#' + currentMarker).removeClass("marker" + " " + currentMarker+"b").addClass("marker"+ " "+ currentMarker);
                        currentMarker = "marker3";
                        $('#marker3').removeClass("marker marker3").addClass('marker marker3b');
                      }
                    });
            })
            .addTo(map);

    const el4 = document.createElement('div');
    el4.className = 'marker marker4';
    el4.id = "marker4";
    el4.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el4)
            .setLngLat([115.819117490495, -31.9774211351355])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.The_Octagon_Theatre.Description;
                      var picture1 = '/static/images/'+sites.The_Octagon_Theatre.FilePath1;
                      var picture2 = '/static/images/'+sites.The_Octagon_Theatre.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
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
            })
            .addTo(map);

            const el5 = document.createElement('div');
            el5.className = 'marker marker5';
            el5.id = "marker5";
            el5.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el5)
            .setLngLat([115.818981014125, -31.9774659015759])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.The_Black_Stump.Description;
                      var picture1 = '/static/images/'+sites.The_Black_Stump.FilePath1;
                      var picture2 = '/static/images/'+sites.The_Black_Stump.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
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
            })
            .addTo(map);

            const el6 = document.createElement('div');
            el6.className = 'marker marker6';
            el6.id = "marker6";
            el6.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el6)
            .setLngLat([115.819353630895, -31.9769529928087])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Dolphin_Theatre.Description;
                      var picture1 = '/static/images/'+sites.Dolphin_Theatre.FilePath1;
                      var picture2 = '/static/images/'+sites.Dolphin_Theatre.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
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
            })
            .addTo(map);

            const el7 = document.createElement('div');
            el7.className = 'marker marker7';
            el7.id = "marker7";
            el7.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el7)
            .setLngLat([115.819837680999, -31.9769150133679])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                            var description = sites.Somerville_Auditorium.Description;
                            var picture1 = '/static/images/'+sites.Somerville_Auditorium.FilePath1;
                      var picture2 = '/static/images/'+sites.Somerville_Auditorium.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
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
            .setLngLat([115.820423923079, -31.9766986366639])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Percy_Grainger.Description;
                      var picture1 = '/static/images/'+sites.Percy_Grainger.FilePath1;
                      var picture2 = '/static/images/'+sites.Percy_Grainger.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
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
            })
            .addTo(map);

            const el9 = document.createElement('div');
            el9.className = 'marker marker9';
            el9.id = "marker9";
            el9.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el9)
            .setLngLat([115.820103985951, -31.9766370620526])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Eileen_Joyce.Description;
                      var picture1 = '/static/images/'+sites.Eileen_Joyce.FilePath1;
                      var picture2 = '/static/images/'+sites.Eileen_Joyce.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
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
            })
            .addTo(map);

            const el10 = document.createElement('div');
            el10.className = 'marker marker10';
            el10.id = "marker10";
            el10.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el10)
            .setLngLat([115.819028, -31.976931])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.The_Dancer_and_Emma.Description;
                      var picture1 = '/static/images/'+sites.The_Dancer_and_Emma.FilePath1;
                      var picture2 = '/static/images/'+sites.The_Dancer_and_Emma.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
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
            })
            .addTo(map);


            const el11 = document.createElement('div');
            el11.className = 'marker marker11';
            el11.id = "marker11";
            el11.style.marginTop = '-'+(36/2)+'px';
            // make a marker for each feature and add it to the map
            new CustomMarker(el11)
            .setLngLat([115.819170196618, -31.9786215907417])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Sundial.Description;
                      var picture1 = '/static/images/'+sites.Sundial.FilePath1;
                      var picture2 = '/static/images/'+sites.Sundial.FilePath2;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1)
                      $("#image2").attr("src", picture2)
                      $("#image3").attr("src", picture2) //just pic2 for now
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
            })
            .addTo(map);
        // function getParameterByName(name, url = window.location.href) {
        //   name = name.replace(/[\[\]]/g, '\\$&');
        //   var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        //       results = regex.exec(url);
        //   if (!results) return null;
        //   if (!results[2]) return '';
        //   return decodeURIComponent(results[2].replace(/\+/g, ' '));
        // }
        //   if(getParameterByName('markerStart') == 3)
        //   {
        //     document.getElementById("marker3").click();
        //   } // "lorem"

        function clickParam(){
          const urlParams = new URLSearchParams(window.location.search);
          const myParam = urlParams.get('markerStart');

          console.log("markerStart" + myParam);
          $("#marker"+myParam).click();
        }
        clickParam();
});
