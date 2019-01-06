// Challenge:
// Correctly include jQuery
jQuery ? console.log("completed") : console.log("failed");

// Select all divs and give them a purple background
$("div").css("background","purple")

// Select the divs with class highlight and make them 200px wide
$(".highlight").css("width","200px")

// Select the div with id third and give it an orange border
$("#third").css("border","2px solid orange")

// Bonus: select the first div only and change its font color to pink
$("div").first().css("color","pink") //method 1
$("div:first-of-type").css("color","pink") //method 2
$("div:first").css("color","pink") //method 3

