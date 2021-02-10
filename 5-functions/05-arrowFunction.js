/*
(Fat) Arrow Functions - alternative to function expressions, allowing to write shorter function expresssion. They are NOT declarations, so they don't get hoisted.
*/

//  (1)     (2)
let hi = () => {
    console.log('hi');
}

hi();

// 1. Assigning variable to fat arrow function
// 2. Use a fat arrow to signify that it is a function

//Arrow functions can have a "Concise Body" or "Block Body"

//concise body - provides an implicit return value by default. denoted by lack of brackets, saving time and lines of code
let hi = () => console.log('hi');
hi();

//Block body - brackets after fat arrow
// - block body must have a return in the body
let hi = () => {
    console.log('hi');
}
hi();


//concise vs block
//concise
let character = (x) => console.log(`${x} is my favorite character!`);
character('Sailor Moon');

//block
let characters = (x,y) => {
    console.log(`I like Parks and Rec. My favorite characters are ${x} and ${y}!`)
}
characters('Leslie Knope', 'Ron Swanson');