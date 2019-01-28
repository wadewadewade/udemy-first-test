## FOUR DIFFERENT RULES WHEN CALLING `this`

# 1. Global context:
Rule applies when you see `this` outside of a declared object
e.g. no object defined with `this` inside it. 
It's out in the wild and *has the value of the global object*
In the browser, that = the window object
So in a browser:
    var person = "Chris"
    window.person === "Chris"
    this.person   === "Chris"


function variablesInThis() {
    // since the value of this is the window
    // all we are doing here is creating a global variable
    this.person = "Chris"
}
(don't do that)
ES5 "strict mode" makes `this` undefined inside functions

# 2. Inside a declared object (implicit/object)
If `this` is declared inside a function, then `this` = the closest parent object

In the following:
    var person = {
        firstName: "Chris",
        sayHi: function(){
            return "Hi " + this.firstName
        },
        determineContext: function(){
            return this === person
        }
    }
the `this` on line `30` refers to the `person`
    person.sayHello() // "Hello Chris"
    person.determineContext() // true

However...
    var person = {
        firstName: "Chris",
        sayHi: function(){
            return "Hi " + this.firstName
        },
        determineContext: function(){
            return this === person
        },
        dog: {
            sayHello: function(){
                return "Hello " + this.firstName;
            },
            determineContext: function(){
                return this === person;
            }
        }
    };
the `this` inside `person.dog` refers to the `dog` object
    person.dog.sayHello() // "Hello undefined"
    person.dog.determineContext() // false

# 3. Call, apply, bind - explicit binding
These can only be used by *functions*

Name of method | Parameters          | Invoke immediately?
-------------------------------------------------------
Call           | thisArg, a, b, c... | YES
Apply          | thisArg, [a,b,c...] | YES
Bind           | thisArg, a, b, c... | NO - returns function definition

`thisArg` = whatever we want the value of `this` to be

To revisit the issue in pt 2, if we want `this` to refer to the person instead of the dog, first part stays the same:
    var person = {
        firstName: "Chris",
        sayHi: function(){
            return "Hi " + this.firstName
        },
        determineContext: function(){
            return this === person
        },
        dog: {
            sayHello: function(){
                return "Hello " + this.firstName;
            },
            determineContext: function(){
                return this === person;
            }
        }
    };
Adding in what we just learnt...
    person.dog.sayHello.call(person) // "Hello Chris"
    person.dog.determineContext.call(person) // true

(Note we are not invoking `sayHello` or `determineContext`)

Can be used to refactor:

    var colt = {
        firstName: "Colt",
        sayHi: function(){
            return "Hi " + this.firstName
        }
    }

    var elie = {
        firstName: "Elie",
        sayHi: function(){
            return "Hi " + this.firstName
        }
    }

    colt.sayHi() // "Hi Colt"
    elie.sayHi() // "Hi Elie" (but all that duplication...)

    // to "borrow" the `sayHi` function from `colt`, we could get rid
    // of the function within `elie` and instead call:

    colt.sayHi.call(elie) // "Hi Elie"

Let's look at apply - only makes a difference when you add arguments...

    var colt = {
        firstName: "Colt",
        sayHi: function(){
            return "Hi " + this.firstName
        },
        addNumbers: function(a,b,c,d){
            return this.firstName + " just calculated " + (a + b + c + d);
        }
    };

    var elie = {
        firstName: "Elie"
    };

    colt.addNumbers(1, 2, 3, 4) // Colt just calculated 10
    colt.addNumbers.call(elie, 1, 2, 3, 4) // Ellie just calculated 10
    colt.addNumbers.apply(elie, [ 1, 2, 3, 4 ]) // Ellie just calculated 10

*Bind* works like *call*, but returns a function definition instead of calling the function.
When would this be useful?
- When we don't know all the arguments that would be called
    var elieCalc2 = colt.addNumbers.bind(elie,1,2)
    elieCalc2(3,5) // "Elie just calculated 11"
- To set the context of the keywords `this` for a function that will be called later
    such as setTimeout

    var colt = {
        firstName: "Colt",
        sayHi: function(){
            setTimeout(function(){
                console.log("Hi " + this.firstName)
            }, 1000)
        }
    }
    // colt.sayHi() // Hi undefined
    // because of the setTimeout, the object
    // it is attached to is the *window*
    // so we need to use bind if we're calling it later

    var colt = {
    firstName: "Colt",
    sayHi: function(){
        setTimeout(function(){
                console.log("Hi " + this.firstName)
            }.bind(this), 1000)
        }
    }
    // colt.sayHi() // Hi Colt

# 4. The 'new' keyword
The value of `this` changes when we use `new` -`this` now refers to the object created

    function Person(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    var elie = new Person("Elie", "Schoppik");
    elie.firstName // Elie
    elie.lastName // Schoppik

