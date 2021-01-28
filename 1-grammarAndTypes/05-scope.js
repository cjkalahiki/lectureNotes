/*
    - scope is how a computer keeps track of ALL variables/functions in a program
        - global scopes exist throughout the entire program
        - local scopes exist only within body/locally

*/

let x = 12; //global scope

function scope() {
    let x = 33; //local variable
    console.log(x);
}

console.log(x);
scope();

let y = 12;

function scopeTwo() {
    y = 33;
    console.log(y);
}

// returns 33 twice bc scopeTwo reinitializes y to 33 
scopeTwo();
console.log(y);

//cannot access a locally scoped variable in global scope of document
function scopeThree() {
    let z = 4;
    console.log(z);
}

scopeThree();
console.log(z); //this will return an error bc no z var has been defined globally

/*
    const - constant variable whose value cannot be changed (reinitialized)

    -var and let seemm to operate the same and share a lot of functionalities, but they have differences
        - var: keyword is scoped to the nearest function block
        - let: keyword is scoped to the nearest enclosing block
*/

// var
var x = 12;

function varTest() {
    var x = 33;
    if (true) {
        var x = 45; //this reinitializes the first var x even though it should not
        console.log(x); // x variable locally scoped to if
    }
    console.log(x); // x variable locally scoped to function
}

varTest(); //scope bleed occured in function bc the x in if statement reinitialized the x outside of the statement
console.log(x); // x variable scoped globally

//let 
let y = 12;
function letTest() {
    var y = 33;
    if (true) {
        let y = 45;
        console.log(y);
    }
    console.log(y);
}

letTest();
console.log(y);