$(document).ready(function () {
    $("#exampleModal").modal('show');
});
var games = document.getElementById("myId");
var texting = document.getElementById("gameText");
function mainFuny() {
    var apple = document.getElementById("main-id").value;
    if (apple == "rayan") {

    }else if(apple == "Rayan") {


    }
    else if(apple == "abdullah") {


    }
    else if(apple == "Abdullah") {


    }
    else if(apple == "Aqeel") {


    }
    else if(apple == "aqeel") {


    }
     else{
        games.style.display = "none";
        texting.innerHTML = "OOPS you cannot visit this website Right Now";
    };
};