function outer(){
    const data = "closures are ";
    return function inner(){
        const innerData = "awesome";
        return data + innerData;
    };
};

outer() // returns the inner() function
outer()() // returns "closures are awesome"

// ***************************

function outer(a){
    return function inner(b){
        return a + b;
    };
};

outer(5)(5) // 10

var storeOuter = outer(5);
storeOuter(10) // 15

// the inner function *has* to be returned for this to work
// the inner function has to use data defined in the outer function
// for it to be a closure