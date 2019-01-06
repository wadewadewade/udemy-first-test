// THESE ARE NOT STORED AS HTML
// THEY ARE JAVASCRIPT OBJECTS

var tag = document.getElementById("highlight");

var tags = document.getElementsByClassName("text-success");

var tagName = document.getElementsByTagName("li");
 
console.log(tag);
console.log(tags);
console.log(tagName);


// alternative way:

var tagV2 = document.querySelector("#highlight");

// but it only selects the FIRST one, so these two are different
var tagsV2 = document.querySelector(".text-success");

// ...so you can use querySelectorAll, which works even if there's only one of those
var tagNameV2 = document.querySelectorAll("li");
 
console.log(tagV2);
console.log(tagsV2);
console.log(tagNameV2);