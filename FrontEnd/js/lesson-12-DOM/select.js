// four ways to select the first <p> tag
// 	<p id="first" class="special">Hello</p>

// first method - query selector on ID
console.log(document.querySelector("#first"));



// second method - query selector on class
console.log(document.querySelector(".special"));



// third method - query selector on tag
console.log(document.querySelector("p"));



// fourth method - getElementByID
console.log(document.getElementById("first"))


// fifth method - getElementByClassName with index
console.log(document.getElementsByClassName("special")[0]);


// sixth method - query selector all on class with index
console.log(document.querySelectorAll(".special")[0]);

// seven - getting silly now
console.log(document.querySelector("h1 + p"));

// Eight?!
console.log(document.querySelectorAll("h1 + p")[0]);