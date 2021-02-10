/* 
    - placeholders for information that we will pass into our function
    - parameteres are placed inside of parentheses
    - parameters separated by comma
*/

function connor(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}

connor('spam musubi'); /* the argument is the string */

let resource = "|=========|"

function machine(ironRod) {
    console.log(ironRod);
}

machine(resource);

/*
CHALLENGE
************
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function testFn(firstName,lastName) {
    let fullName = firstName + ' ' + lastName;
    console.log(`Hello, my name is ${fullName}.`);
}

testFn('Connor','Kalahiki');