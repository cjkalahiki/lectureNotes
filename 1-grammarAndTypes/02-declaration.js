/*
NOTES:
-variables: named containers for storing data values and referring to later
    • variable ame must begin with letter, underscore, or dollar sign
    • numbers may follow characters, but cannot come first in naming convention
    • JavaScript is case sensitive 
    • camelCase is best practice
        - snake_Case, PascalCasing are others
    
*/

let a = 2;

let        b         =        2;
/* (1)    (2)       (3)      (4)

1. Keyword
2. Variable name (we can name this whatever we want; camel casing) 
3. Assignment Operator
4. Variable value 

var, let, and const:
- var: old keyword for variables **in this course, will NOT be using var often
- let: 'new' keyword, best practice now for declaration
- const: constant; declares unchangeable variable

*/

/*
NOTES:
- declarations: on left side of variable (let + var name)
- initialization: sets value of the variable
    • incorporates the variable name, the assignment operator, and the value
*/

let x;
console.log('Declaration', x);

x = 10;
console.log('Initialization', x);

x = 33;
console.log("Initialization 2", x);

let y = 'Hello';
console.log('Both:', x, y);

let today = "Great!";
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty);

today = 'Lovely';
console.log(today, elevenFifty);