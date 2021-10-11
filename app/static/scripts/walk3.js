var color1 = "#e2b600"
var currentMarker = "";
var count = 0;

$.getJSON("../static/sites.json",function(sites){
    // create a HTML element for each feature
    const el4 = document.createElement('div');
    el4.className = 'marker marker4';
    el4.id = "marker4";
    el4.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el4)
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
                    document.getElementById("next").style.display = "none";
                    document.getElementById("prev").style.display = "block";
            })
            .addTo(map);

    const el3 = document.createElement('div');
    el3.className = 'marker marker3';
    el3.id = "marker3";
    el3.style.marginTop = '-'+(36/2)+'px';
    // make a marker for each feature and add it to the map
    new CustomMarker(el3)
            .setLngLat([115.819063839072, -31.9825061941557])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Prescott_Court.Description;
                      var picture1 = '/static/images/'+sites.Prescott_Court.FilePath1;
                      var picture2 = '/static/images/'+sites.Prescott_Court.FilePath2;
                      var picture3 = '/static/images/'+sites.Prescott_Court.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1);
                      $("#image2").attr("src", picture2);
                      $("#image3").attr("src", picture3);
                      $("#Content").html(description);
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
            .setLngLat([115.819967824128, -31.9829062327725])
            .onClick(() => { //when clicked, define the following function
                    $.getJSON("../static/sites.json",function(sites){
                      var description = sites.Agriculture_Department.Description;
                      var picture1 = '/static/images/'+sites.Agriculture_Department.FilePath1;
                      var picture2 = '/static/images/'+sites.Agriculture_Department.FilePath2;
                      var picture3 = '/static/images/'+sites.Agriculture_Department.FilePath3;
                      $("#Content").html(description);
                      $("#image1").attr("src", picture1);
                      $("#image2").attr("src", picture2);
                      $("#image3").attr("src", picture3);
                      $("#Content").html(description);
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
                    count = 2;
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

});

function clickParam(){
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('marker');
  
  console.log("marker" + myParam);
  $("#marker"+myParam).click();
}