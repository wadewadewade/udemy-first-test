// a palindrome reads the same both ways
// the largest palindrome made from the product of two 2-digit numbers is 91 * 99 = 9009
// 
// find the largest palindrom emade from the product of two 3-digit numbers

// get the buttons working
var problemFourButton = document.querySelector("#calc-4")


problemFourButton.addEventListener("click",runTheThing);

// first set all palindromes as an (empty) array

var palindrome = [] // so lonely

// then the function to check if it's a palindrome

function checkPalindrome(num) {
    if(num === Number(num.toString().split("").reverse().join(""))){
        return true;
    }
    return false;
}

// now to iterate through
function runTheThing(){

    for(let i = 100; i < 1000; i++){
        for(let j = 100; j < 1000; j++){
            if(checkPalindrome(i * j) === true){
                palindrome.push(i * j);
            };
        };
        
    };
    document.querySelector("#answer-4").textContent = "Answer = " + Math.max(...palindrome);
}
