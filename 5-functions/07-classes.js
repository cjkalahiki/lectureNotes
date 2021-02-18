/*
    - classes are special functions we can write that can be defined by class declaration or class expression -- like a regular function
    
    - classes act as bluieprints for creating objects that share same methods/properties 
        • use that blueprint to create new objects or instances of a parent class, and each new object we create can hold different values for properties that object holds
            -i.e. property of a class Automobile, each new automobile we create thats a copy of the parent class, can have a different value for the property of model

    - the body of a calss is in curly braces 
        • inside the body is where we define class members such as methods or a constructor 
        • constructor: a method for creating and initializing an object created with a class
            - there can be only ONE method with the name of constructor in a class
            - super keyword used to access and call functions (methods) on an object's parent
    
    - JS classes introduced in ESS, a way to write JS' previously existing prototype-based inheritance - which is a way of creating an object that acts as a blueprint, to then create other objects that share the same properties/methods as the parent
        • classes are the closet thingg to vanilla JS to Object-Oriented Programming
*/

//Class Declaration, need to capitalize the first letter in the name
class Automobile {
    constructor(make, model){
        //this refers to object that will be created
        this.make = make; //this is an instance property, .make creates a key in the object set equal to the value of "make"
        this.model = model; //need to be defined within constructor method 

        // this 'this' keyword refers to the object it belongs to. Since the constructor method is creating a new object, we're setting up a key of make and model, and we use the 'this' keyword to denote that both of those properties belong to our class of Automobile
    }
}

/*
    Hoisting
        - important difference between functions and class declarations is that class declarations are not hoisted
            • class declaration needs to be declared prior to accessing it
*/

/*
    CLASS EXPRESSION
        - class expressions can be named or unnamed
            name of a named class can be retrieved through class' name property
*/

//unnamed class
let Vehicle = class {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}

console.log(Vehicle.name);//Vehicle is returned

//named
let Vehicle = class Vehicle2 {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}
console.log(Vehicle.name); //Vehicle2

/*
    METHODS (prototype methods)
        - prototype methods are a shorter syntax for writing method definitions - which are basically just functions that are passed down to all subclasses created from the parent class. Those methods (functions) can then be called and invoked
*/

//METHOD DEFINITION - OLD SYNTAX
let automobile = {
    start: function () {
        //body
    },
    stop: function() {
        //body
    }
}

//PROTOTYPE METHOD - NEW SYNTAX
let automobile = {
    start() {
        
    },
    stop() {

    }
}

class Automobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    //method 1
    start(){
        console.log(`This ${this.make} ${this.model}'s enginge started.`);
    }

    stop(){
        console.log(`This ${this.make} ${this.model}'s enginge stopped.`);
    }
}

/*
    NEW INSTANCES (subclasses)
        - using new keyword, we can use our class of Automobile as our blueprint to create a new object/instance of Automobile class
*/

//new object/instance (subclass) of Automobile class; this is a class expression
let hondaCivic = new Automobile('Honda', 'Civic'); //new is the keyword to create the new object

//we can now use dot notation to access the methods that were inherited 
hondaCivic.start();
hondaCivic.stop();

//another new object/instance (subclass) of the Automobile class
let fordEscape = new Automobile('Ford', 'Escape');
fordEscape.start();
fordEscape.stop();

/*
    EXTENDS
        - extends keyword used with class declaration or class expressions to create a new class as a child of another class

        - each new class we create that extends from the parent not only inherits the properties/mehtods, but it also can have its own properties/methods
*/

//PARENT
class Animal {
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} eats their food.`);
    }

}

// let catDog = new Animal('Catticus');
// catDog.eat();
//Subclass - extends
class Dog extends Animal {
    constructor(name, breed){
        //super must be called before you can use the this keyword
        //in derived classes(subclasses), JS requires us to call super function inside of constructor before anything or we won't access the this keyword
        super(name);
        this.type = breed;
    }

    play(){
        console.log(`${this.name} fetches the ball.`);
    }
}

let Luna = new Dog('Luna', 'Husky');
Luna.eat();
Luna.play();