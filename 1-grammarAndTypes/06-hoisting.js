/*
    - hoisting: how code is read, interpretted, compiled, and read on screen
    - JS is interpreted line by line and read top to bottom
    - when JS code is read, code is parsed through twice
        • pass 1: code read top to bottom and any variables/functions declared will be stored away to memory
        • pass 2: code is executed (read again top to bottom), and all values given to variables are assigned.
*/

console.log(myName);
let myName = 'Connor';

testFunction (); //this still runs regularly because the function is stored in memory with first pass through 

function testFunction() {
    console.log('I have been hoisted')
}

