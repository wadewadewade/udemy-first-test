// VERSION 1

// var lowerAnswer = prompt("Are we there yet?");
// var answer = lowerAnswer.toUpperCase();

// while(answer !== "YES" && answer !== "YEAH") {
//     var answer = prompt("Are we there yet?");
// }

// alert("YAY");


// VERSION 2 - IF YES IS ANYWHERE WITHIN THE STRING

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("YAY");