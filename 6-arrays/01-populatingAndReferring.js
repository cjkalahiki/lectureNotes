/*
    - an array is a container that holds a list of items
        - items do not have to be same data types
    - denoted by []
*/

let list = ['orange', 'banana', true, 5];
console.log(list[0]);

/*
    - when referencing an array, append square brackets onto end of referenced array using the index of the desired item
*/

let students = ['Adam', 'Alec', 'Breyanna', 'Connor', ['Derek', 'Elijah', 'Garrett']];
console.log(students[0][0]); //print out the chars for each item 

/*
CHALLENGE
************
    - dive into the nested array and pull the value 'Derek'
    - print out "Hello Derek!"
*/
console.log(`Hello, ${students[4][0]}!`);