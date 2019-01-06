var h1 = document.querySelector("h1");

h1.className = "text-success display-4"

var body = document.querySelector("body"); //SELECT

var isBlue = false;

setInterval(function() {
    if (isBlue) {
        body.style.background = "white";
        isBlue = false;
    } else {
        body.style.background = "#EFEFEF";
        isBlue = true;
    }
    // isBlue != isBlue;
}, 10000);