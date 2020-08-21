$(document).ready(function () {
    $("#exampleModal").modal('show');
});

var games = document.getElementById("myId");
var texting = document.getElementById("gameText");
function mainFuny() {
    var apple = document.getElementById("main-id").value;
    if (apple !== "") {
    texting.innerHTML = "Hi" + "&nbsp;" + apple + "!" + "&nbsp;" + "Thanks for visiting our website";

    }
     else{
        games.style.display = "none";
        texting.innerHTML = "OOPS you cannot visit this website Right Now";
    };
};