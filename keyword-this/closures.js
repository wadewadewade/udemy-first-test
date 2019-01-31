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

// ***************************
// Can be used for private variables

function counter(){
    let count = 0;
    return () => {
        return ++count;
    }
};

var c = counter()

c   // function definition
c() // 1
c() // 2

// Nobody has access to the variable "count"
count // undefined

// ***************************
// LAST EXAMPLE

function classRoom(){
    const instructors = ["Colt", "Elie"]
    return {
        getInstructors: function() {
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

course1 = classRoom()
course1.getInstructors() // ["Colt", "Elie"]
course1.addInstructor("Ian") // ["Colt", "Elie", "Ian"]
course1.getInstructors() // ["Colt", "Elie", "Ian"]

course2 = classRoom()
course2.getInstructors() // ["Colt", "Elie"]

// we also have NO access to the instructors variable
// which makes it private - no one can modify it
instructors // undefined
