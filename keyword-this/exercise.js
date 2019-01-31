// Create a constructor function for a Vehicle

// Every object created from this constructor should a have a make, model and 
// year property

// Each object should also have a property called isRunning, which should be set
// to false

// Every object created from the Vehicle constructor should have a function called
// turnOn, which changes the isRunning property to true

// Every object created from the Vehicle constructor should have a function called
// turnOff, which changes the isRunning property to false

// Every object created from the Vehicle constructor should have a method called honk
// which returns the string "beep" ONLY if the isRunning property is true

// ********************************

function Vehicle(make, model, year){
    this.make  = make;
    this.model = model;
    this.year  = year;
    this.isRunning = false;
}

class Car { //ES6 yeeeeah
    constructor(make, model, year){
        this.make  = make;
        this.model = model;
        this.year  = year;
        this.isRunning = false;
    }
}

Vehicle.prototype.turnOn = () => {
    this.isRunning = true;
};

Vehicle.prototype.turnOff = () => {
    this.isRunning = false;
};

Vehicle.prototype.honk = () => {
    if(this.isRunning){
        return "beep"
    };
};

var myFirstCar = new Vehicle("Vauxhall", "Corsa", 2001);
const myCurrentCar = new Vehicle("BMW", "1 series", 2001); // const! es6!

myFirstCar.honk(); // undefined
myFirstCar.turnOn(); 
myFirstCar.honk(); // "beep"
myFirstCar.turnOff(); 
myFirstCar.honk(); // undefined

myCurrentCar.turnOn();
myCurrentCar.honk(); // beep
