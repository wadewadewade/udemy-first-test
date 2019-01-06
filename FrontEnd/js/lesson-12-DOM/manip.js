var h1 = document.querySelector("h1")

h1.addEventListener("click",function() {
    h1.classList.toggle("text-info");
    h1.classList.toggle("text-success");
})