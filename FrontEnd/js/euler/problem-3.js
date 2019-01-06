var problemThreeButton = document.querySelector("#calc-3")


problemThreeButton.addEventListener("click",function(){

    // The prime factors of 13195 are 5, 7, 13 and 29.
    // What is the largest prime factor of the number 600851475143 ?   
    var factor = 2;
    // result = getPrime(600851475143);
    document.querySelector("#answer-3").innerHTML = "Answer = " + getPrime(600851475143);
})

var factor = 2;

function getPrime(number) {
    while(number != factor) {
        if (number % factor === 0) {
            number = number / factor;
            factor = 2;
        } else {factor += 1}
    }

       return(factor);

    function writePrime(factor) {
        return factor;
    }

    console.log(writePrime(factor + "step 2"))

}
 