// checks if input is even - returns true or false

// THIS IS THE OLD WAY
// function isEven(a) {
//     if(a % 2 === 0) {
//         return true
//     }
//   else {
//         return false
//     };
// }
// 
// NOW WE REFACTOR

function isEven(a) {
    return a % 2 === 0;
    // that is a true or false statement
}


// returns factorial of input e.g x * (x-1) * (x-2) etc.
// FIRST WAY IS COUNTING DOWN
function factorialDown(b) {
    if(b === 0) {
        return 1
    }
    else {
        var answer = b
        for(b; b > 1; b--) {
        answer *= (b - 1);
    }
    return answer;
    }
}
// BUT POSSIBLY BETTER TO COUNT UP
function factorialUp(num) {
    var result = 1 // set it to one, covers the 0! case
    for (var i = 2; i <= num; i++) { // because * 1 is unnecessary, start at 2
        result *= i; // result = result * whatever stage we're at, then plus 1
    }
    return result;
}


// renames kebab-case to snake_case
function kebabToSnake(str) {
    return str.replace(/-/g,"_");
}

function slowKebabToSnake(string) {
    var snakeCase = ""
    for(let i = 0; i < string.length; i++) {
        if(string[i] === "-") {
            snakeCase = snakeCase + "_"
        }
        else {
            snakeCase = snakeCase + string[i];
        }
    }
    return snakeCase
}