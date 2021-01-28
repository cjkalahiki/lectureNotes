/*
    -for in loops are great for looping over values in an object
        -properties (or key value pairs) in an object are known as enumerable properties
        -for in loops will loop over the enumerable(count) properties of an object
        -enumerable simply means 'countable'
*/
let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
} //all keys in objects are strings by default

for (let value in student) {
    console.log(value);
    // console.log();
}

//print out Peter
console.log(student.name); //dot notation 
console.log(student['name']); //object bracket notation to reference the key using ''

for (let item in student) {
    console.log(item); //item returns keys
    console.log(student[item]); //square bracket to grab values
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for(let cat in catArray) { //cat is variable set to 0 and runs until reaches end of object/array
    console.log(cat); //no keys, so it returns the index values (0-4)
    console.log(catArray[cat]); //prints the value at index "cat" (because cat starts at 0) from array catArray
}

//print off values 
let vowels = ['a', 'e', 'i', 'o', 'u'];

for (let index in vowels) {
    console.log(vowels[index]);
}

/*
CHALLENGE
************
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/

//Best way to do this
let myName = 'coNNoR';
let capName;

for (let i in myName) {
    if (i == 0) {
        capName = myName[i].toUpperCase();
    } else {
        capName += myName[i].toLowerCase(); //this takes the capital first letter and adds the rest of the string to it in lowercase
    }
}
console.log(capName);