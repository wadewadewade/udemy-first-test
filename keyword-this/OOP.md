# OOP

A programming model based around the idea of `objects`
These `objects` are constructed from what are called
`classes`, which we can think of like a blueprint.
We call these `objects` created from `classes` `instances`

We strive to make our classes abstract and modular to
encourage re-use throughout our application.

Javascript does not have support for classes - we use
functions and objects!

# Why is it useful?
Imagine you're an architect and you have to make houses
Each of these will all have bedrooms, bathrooms and numSqft.

You could create each house as an object...

    var house1 = {
        bedrooms: 2,
        bathrooms: 1,
        sqFeet: 1000
    };
    
    var house2 = {
        bedrooms: 3,
        bathrooms: 2,
        sqFeet: 1500
    };

    var house3 = {
        bedrooms: 1,
        bathrooms: 1,
        sqFeet: 750
    };

    var house4 = {
        bedrooms: 5,
        bathrooms: 3,
        sqFeet: 3000
    };

...fine, but what if we had to build 100?! It's already repetitive.

A solution to create a house object - a *constructor* function. This will be our blueprint.

    function House(bedrooms, bathrooms, numSqft){
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.numSqft = numSqft;
    }

Important points:
1. Function name is capitalised - this is convention, doesn't change anything though
2. `this` is back!
3. If we called this function normally, nothing would be returned

How we'd use this:
    house1 = new House(2,1,1000);

    firstHouse.bedrooms // 2
    firstHouse.bathroom // 1
    firstHouse.numSqft // 1000

Using `new` means that...
1. Creates an object
2. Sets the value of `this` inside the constructor to be that object
3. Adds an implicit `return this` at the end of the function
4. Adds a property which can be accessed ("dunder") as `__proto__`, which links the newly created object to the prototype property on the constructor function

On to the examples:

    function Dog(name, age){
        this.name = name
        this.age = age
        this.bark = function(){
            console.log(this.name + " just barked!")
        }
    }

    var woody = new Dog('Woody', 5);
    var chester = new Dog('Chester', 5);

    woody.bark() // Woody just barked!
    chester.bark() // Chester just barked!