var problemFiveButton = document.querySelector("#calc-5")

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

problemFiveButton.addEventListener("click",function(){

    var result = 0;

    for(let i = 20; i < 40000; i++){
        if(checkDivisible(i) === true){
            console.log(i);
            result = i;
            document.querySelector("#answer-5").innerHTML = "Answer = " + result;
            return result;
        }
    }

})

// this checks if it's divisble by the numbers
function checkDivisible(num) {
    for(let i = 1; i === 10; i++){
        if(num % i !== 0){
            return i;
        }
    }
    
};