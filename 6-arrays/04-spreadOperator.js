/*
    spread operator - denoted by...
        • pulls out all elements of an array and gives them back to us as a stand-alone list of items
        • good for copying an array
        • good for working with data in APIs we'll be building in the next badge
    arrays are stored by reference in memory, meaning that they aren't stored by value (pointing to certain location in memory)
        • 
*/


let fullName = ['Connor','Kalahiki'];

//INCORRECT SYNTAX
// ...fullName // 'Connor', 'Kalahiki' cannot have two strings separated by a comma 

// //CORRECT SYNTAX
let copiedFullName = [...fullName]; //copies array items into the new array
console.log(copiedFullName);

// let copiedFullName = [fullName]; //this nests the fullName array within the copiedFullName array
// console.log(copiedFullName);

/*
    - one advantage of spread operator is in the event that we decide to add another value to our original array, we can do so without altering our copied array. Keep in mind this is dependent on what data types we're working with (bc of memory allocation)
*/

fullName.push('Mr.');
console.log(fullName, copiedFullName);

// SPREAD OPERATOR and NUMBERS

//JS has its own global Math object that has its own built in methods

//Math.min - returns the smallest value within a list of integers
console.log(Math.min(-1,2,5)); //but can't have an array inside, so need operator

const prices = [10.99, 5.99, 3.99, 7.50];
console.log(Math.min(...prices)); //the operator puts these values into the format seen in prev example

//SPREAD OPERATOR and OBJECTS
let persons = [{ name: 'Zach', age: 27}, {name: 'Donovan', age: 25}];
// let copiedPersons = [...persons]; //copies the two objects
let copiedPersons = persons; //this will hold the exact same info as persons, meaning any pushed info will be stored in this too

persons.push({name: 'Anna', age: 29}); //doesn't change the copiedPersons bc this comes after 
console.log(copiedPersons);

/*
    JS' 5 data types that are passed by value: bool, null, undef, string, number (primitive data types)
        • if primitive data type is assigned to a variable, we can think of that variable as containing a primitive value
        • when running code, JS stores vars and respective values to memory

        variables   values
        x           10
        y           'abc'
        z           null

        - when we assign these variables to another variable using = operator, we copy the VALUE bc they are primitive data types
            • i.e. let a = x;

    JS has 3 data types that are passed by reference: array, function, and object (all of these are considered objects)
        • variables are assigned a non-primitive value are given a reference to that variable. Reference points to objects location in memory
        • objects created at a locationin memory. for let arr = []. arr is equal to the address where the values within the array are stored in memory

        let arr = [];
        arr.push(1);

        VARIABLE    VALUE   ADDRESS   OBJECT
        arr         <#001>   #001      []
        arr         <#001>   #001      [1] //after push

        - address doesn't change, just the values within the object

        - when a reference type is copied to another variable, the address is what is copied, not the value


*/

let persons = [{ name: 'Zach', age: 27}, {name: 'Donovan', age: 25}];
let copiedPersons = [...persons];

persons.push({name: 'Anna', age: 29});

copiedPersons[0].name = 'Zachary'; //goes to the address in memory and changes it
persons[0].name = 'Michael'; //they point to the same place in memory
console.log(persons, copiedPersons);

//SPREAD OPERATOR and AVOIDING CHANGING BOTH COPIED AND OG
let persons = [{ name: 'Zach', age: 27}, {name: 'Donovan', age: 25}];
//bc the array contains objects, those objects have their own addresses too, so need to make copies of those objects too
let copiedPersons =  persons.map(person => ({
    name: person.name,
    age: person.age
})) //map method creates a new array populated w results of original array

persons.push({name: 'Anna', age: 29});
copiedPersons[0].name = 'Zachary';
console.log(persons,copiedPersons);

/*
    - since we are mapping over out original array, and then creating new objects with the values from person, those new objects will have their own addresses to where they are stored in mem
        • only copy what you plan on changing ! for mem alloc sake
*/