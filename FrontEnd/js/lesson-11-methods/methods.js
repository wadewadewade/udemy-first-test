var obj = {
    name: "Dave",
    age: 30,
    isCool: true,
    friend: ["Bob","Tina"],
    add: function(x, y) {
        return x + y;
    }
} 

var comments = {
    data: ["Great!","Cool stuff","Buy my shit"],
    
    // this does the same as the global "print" function below 
    print: function(){
        this.data.forEach(function(el){
            console.log(el);
        });
    }
};

function print(arr) {
    arr.data.forEach(function(el){
        console.log(el);
    });
}