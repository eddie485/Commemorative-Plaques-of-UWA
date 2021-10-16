function startWalk() {
    document.getElementById("start").style.display = "none"; // remove start walk button once clicked
    document.getElementById("next").style.display = "block"; // next location button shows once walk starts
    map.flyTo({
    });
    document.getElementById("marker1").click(); // clicks on the first location marker to start walk
    window.scrollTo(0, 0);
    console.log(count);
}

function changeLoc(num, final){ //"final" arguement is the number of locations minus one
    if(num == 1){
        if(count <= final){
            document.getElementById("prev").style.display = "block"; // shows previous button again if missing
            count += 1;  // increases count variable by 1 to move to next location
            var markerID = "marker" + String(count)
            map.flyTo({
            });
            document.getElementById(markerID).click();
            window.scrollTo(0, 0);
            console.log(count);    //shows count on console screen for debugging purposes
            console.log(markerID);
        }
        if(count == final+1){
            document.getElementById("next").style.display = "none"; //next location disappears once they reach the final locaiton
        }
    }

    if(num == 2){
        if(count > 1){
            document.getElementById("next").style.display = "block"; // shows next button again if missing
            count -= 1;
            var markerID = "marker" + String(count)
            map.flyTo({
            });
            document.getElementById(markerID).click();
            window.scrollTo(0, 0);
            console.log(count);
        }
        if(count < 2){
            document.getElementById("prev").style.display = "none"; //previous location utton disappears once they're back at first location
        }
    }
}
