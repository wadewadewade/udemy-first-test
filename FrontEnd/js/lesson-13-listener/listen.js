// Select them
var button = document.querySelector("button");
var p = document.querySelector("p");

// Add event listener
button.addEventListener("click",function() {
    p.textContent = "The button has been clicked!";
    p.classList.remove("text-danger");
    p.classList.add("text-success");
});