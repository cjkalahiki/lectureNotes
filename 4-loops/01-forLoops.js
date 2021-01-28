/*
    - different types of loops
        - for, for in, for of
        - while // do while loops
        - labeled loops
        - break loops
        - continue loops

    - danger of an infinite loop: 
        • exit out of VsCode
    
    - for loops take three parameters
        • initial expression
        • condition
        • increment expression
*/

//count to 20 by 2s
for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}

//count from 10 to 0
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//count from 0 to -24 by 2s
for (let i = 0; i > -25; i-=2){
    console.log(i);
}

//loop through name and display each letter individiually
let myName = 'CoolBoy777';
let nameLength = myName.length;

for (let i = 0; i < nameLength; i++){
    console.log(myName[i]);
}

// make loop that adds up numbers from 1 to 50 (should equal 1275)
let add = 0;
for (let i = 1; i <= 51; i++){ // <= 51 bc needs last step to go to the else condition, or it will just stop at if statement
    if (i < 51) {
        add += i;    
    } else {
        console.log(add);
    }
}