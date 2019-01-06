var colors = ["Red", "Orange", "Yellow"];

function myForEach (arr, func) {
    // loop through array
    for(let i = 0; i < arr.length; i++){
        // call func
        func(arr[i]);
    }
};

Array.prototype.myForEach = function(func){
    // loop through array
    for(let i = 0; i < this.length; i++){
        // call func
        func(this[i]);
    }
};