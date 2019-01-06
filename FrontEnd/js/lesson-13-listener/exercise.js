var button = document.querySelector("button");

// don't actually need to do the below
// because we can use document.body instead
// var body = document.querySelector("body");

button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
});