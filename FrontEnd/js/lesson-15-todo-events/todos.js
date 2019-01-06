var AllLIs = document.querySelectorAll("li");

for (var i = 0; i < AllLIs.length; i++){
       AllLIs[i].addEventListener("mouseover", function() {
        this.classList.add("active")});

        AllLIs[i].addEventListener("mouseout", function() {
        this.classList.remove("active")});

        AllLIs[i].addEventListener("click", function() {
        this.classList.toggle("done")});
};