function myfun(){
    var a = confirm("To view one more webiste click OK");
    if (a === true) {
     window.open("https://rayannaeem786.github.io/estate-agent.github.io");
    } else {
        alert("as you wish");
    };
 
  };
 
 function myfunction() {
     //  prompt("Welcome to Rayan's Websites. Please give us a feedback");
     var person = prompt("For verification Please enter your name");
 
     if (person != null) {
         var apple = prompt("Hello " + person + "! How are you today?");
         if (apple == "fine") {
             alert("Your verifications are correct. Now you can easily view our website");
         } else {
            alert("Your verifications are correct. Now you can easily view our website");
        };
 
     }
 }