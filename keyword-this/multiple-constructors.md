# Multiple constructors

Imagine we have two constructors - one for a car, one for a motorbike

    function Car(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.numwheels = 4;
    }

    function Motorbike(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.numwheels = 2;
    }

So much duplication! Let's use call or apply...

    function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numwheels = 4;
    }

    function Motorbike(make, model, year){
        // using call
        Car.call(this, make, model, year);
        this.numWheels = 2;
    }
    OR
    function Motorbike(make, model, year){
        // using apply
        Car.apply(this, [make, model, year]);
        this.numWheels = 2;
    }
    *OR EVEN BETTER*
    function Motorbike(make, model, year){
        // using apply and *arguments*
        Car.apply(this, arguments);
        this.numWheels = 2;
    }

