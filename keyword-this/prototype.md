## PROTOTYPE

`__proto__` vs. `prototype` vs `constructor`

Every constructor function has a property on it called "prototype", which is an object.
The prototype object has a property on it called "constructor", which points back to the constructor function.
If properties or methods are placed on the prototype, they can be accessible from any object created from that constructor function, through the `__proto__` link, which is established when the *new* keyboard is used

---------------------------
    // this is the constructor function
    function Person(name){
        this.name = name;
    };
    // there is a property on this constructor function called `prototype`

    var elie = new Person("elie");
    var colt = new Person("colt");
    // because they were created from the Person function, they each have a property called dunder proto AKA `__proto__`

    // The Person.prototype object also has a property
    // called constructor which points back to the function

    Person.prototype.constructor === Person; // true

Prototype property is an object which can have methods and properties placed on it. These are shared and accessible from any object created by this constructor when `new` is used

    Person.prototype.isInstructor = true;

    elie.isInstructor; // true
    colt.isInstructor; // true

    //this happens through __proto__

    