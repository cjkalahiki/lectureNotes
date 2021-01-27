/*
Booleans: T/F
*/

let on = true;
let off = false;

if (on){
    console.log('Hello, world!');
} else {
    console.log('Bye, world!');
}

/*
NULL: empty value, nothing in this container. still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
UNDEFINED: no value is assigned and does not act as an empty container.
- just declare a variable, no need to initialize
*/

let undef;
console.log(undef);

/*
NULL vs UNDEFINED:
Null:
    - Null is like container with nothing in ti
    - Undefined is when a variable has not been initialized or has not been created

    null variables are like UPS packages that were intentionally packed with nothing
    undef variables are like packages that need to still be assembled
*/

/*
NUMBERS: do not need to declare int, float, double, etc. 
there are different ways to make these values more exact
JS is not good for math
*/

let degrees = 90;
console.log(degrees);

let rounded = 9999999999999999; //will round up, bc JS rounds up after 16 decimal places
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite); //answer is 0.30000000000000004

/*
STRINGS: characters, text wrapped in single or double quotes
*/

let stringOne = "double quotes";
let stringTwo = "Oh hi Mark";
console.log(stringOne, stringTwo);

//Numnbers vs Strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); //number
console.log(second); //string this is called concatenation (adding strings together)

/*
OBJECTS: store many values instead of single value
*/

let frodo = {
    race: 'hobbit', //this is a key value pair
    rings: 1,
    cloak: true
}

console.log(frodo.race);
console.log(typeof frodo); //typeof returns the datatype

/*
ARRAYS: containers of values; strings, numbers, etc.
    - denoted by []
    - don't have to be same dataType
    - when using "typeof", will return as object, not array (meaning they are the same thing)
*/

let arrayOne = [1, 2, 'itemOne', undefined];
console.log(arrayOne[2]); //outputs the THIRD item in the list 

let list = [ 'item1', undefined , 3 ];
//  (1)    (2)             (3)  
/*
1. name of array or list
2. arrays use square bracket
3. each item, regardless of dataType, and separated by commas
*/

/*
    addition: when JS sees that we are trying to combine two or more numbers, it adds the values
    concatenation: when JS sees that we are trying to combine two or more strings, it creates a larger string
    coersion: JS defaults to concatenation if there adding a value and a string
*/

let example = 1050 + '100';
console.log(example); //outputs 1050100
console.log(typeof example); //outputs string

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/


let firstName = 'Connor';
let lastName = 'Kalahiki';
let houseNumber = '45-708';
let street = 'Ashburough Ave';
let city = 'Roatside';
let state = 'Philiwestvia';
let zipcode = '90879-0897';

console.log(firstName, lastName + ', ' + houseNumber, street + ', ' + city + ', ' + state, zipcode); // string concatenation
console.log(`${firstName} ${lastName}, ${houseNumber}`) // string interpolation
console.log(`Hello, my name is ${firstName}.`);


let address = {
    number: '43-973',
    streetName: 'Cool Boy St',
    cityName: 'Myria',
    stateName: 'Blystar',
    zipcodeNum: '89098-9087'
}

console.log(address.number + ' ' + address.streetName + ', ' + address.cityName + ', ' + address.stateName + ' ' + address.zipcodeNum);


/*
properties are qualities associated with a data type
    - strings
    use dot noatation to get property
String Properties
    - properties are qualities athat are associated with a datatype
    - string.property
*/

let myName = 'Zach';
console.log(myName.length);

/*
    String methods
        - methods are tools that help us manipulate data
        - string.method()
*/

let myNameIs = 'Zach';
console.log(myNameIs.toUpperCase()); //method that changes a string to uppercase

let hometown = 'my hometown is greenwood';
console.log(hometown.includes('greenwood')); //checks to see if variable includes the string 'greenwood'

/*
research split method, allows us to get array from the string
variable.split(' '); returns the string split with each word as own item
variable.split(''); returns the string split with each character as own item
variable.split('', #); returns only # chars split
split(separator, limit); separator is optional that specifies that character used to split the string(if omitted, entire string of only one array item)
    • limit (optional): integer specifying number of splits, items after split limit will not be included
    • if use a character for splitting it places a comma in places within string that have that character
*/

let sent = 'This sentence will be split into individual parts';
console.log(sent.split('i'));