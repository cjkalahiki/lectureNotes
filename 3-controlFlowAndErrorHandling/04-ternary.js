// a ternary is the shortcut way to write a conditional
let num = 6;

//if/else
if (num > 0) {
    console.log('The number is positive.');
} else {
    console.log('The number is negative.');
}

//ternary
(num > 0) ? console.log('The number is positive.') : console.log('the number is negative.');
// (1)   (2)  (3)                                 (4)   (5)
/*
1. first conditional
2. ?
3. body
4. : 
5. else statement
*/

let luckyNumber = 47;

(luckyNumber == 47) ? console.log('The numbers match.') 
    : (luckyNumber == 'deez Nuts') ? console.log('Whoa, take it easy') 
    : console.log('yo');