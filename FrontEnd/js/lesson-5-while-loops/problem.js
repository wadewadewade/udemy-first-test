// QUESTION 1
console.log("Print all numbers between -10 and 19")

var i = -10;

while(i <= 19) {
    console.log(i);
    i++;
}

// QUESTION 2
console.log("Print all even numbers between 10 and 40")
// One way of doing it
var i = 10;

while (i <= 40) {
    console.log(i);
    i+=2;
}

// QUESTION 3
console.log("Print all odd numbers between 300 and 333")
// This is the other way of doing it. Probably better
var i = 300;

while(i <= 333) {
    if(i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

// QUESTION 4
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")

var i = 5;

while(i <= 50) {
    if(i % 5 === 0 && i % 3 === 0 ) {
        console.log(i);
    }
    i++;
}