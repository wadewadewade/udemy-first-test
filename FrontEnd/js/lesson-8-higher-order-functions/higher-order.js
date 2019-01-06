function sing() {
    console.log("twinkle twinkle...");
    console.log("how i wonder...");
}


// setInterval(anotherFunc, interva;)

setInterval(sing, 1000);

// could also do an anonymous function in the console:
// 
// setInterval(function(){
// 	console.log("I am an anonymous function!");
//     console.log("This is awesome");	
//     },2000
//     );