var age = prompt("How old are you?")

if (age < 0) {
    document.getElementById.innerHTML = '<p class="info">Error, you\'re not born yet"</p>';
    console.log("Error");
}
else if(age < 18) {
    document.getElementById("decision").innerHTML = '<p class="text-danger">Sorry, you are not old enough to enter the venue</p>';
    console.log("Go away");
}

else if(age < 21){
    document.getElementById("decision").innerHTML = '<p class="text-warning">You can enter, but cannot drink</p>';
    console.log("Come in, carefully");
}

else if(age == 21){
    document.getElementById("decision").innerHTML = '<p class="text-success">Happy birthday! Come on in, have a free shot</p>';
    console.log("Birthday shots");
}

else {
    document.getElementById("decision").innerHTML = '<p class="text-info">Come on in!</p>';
    console.log("Get smeshed");
}

if (age % 2 !== 0) {
    console.log("Your age is an odd number");
}

if (age % Math.sqrt(age) === 0) {
    console.log("perfect square!");
}