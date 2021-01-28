/*
    - whereas for in look at enumerables properties, for of look at iterable properties (able to parse through with numbers)
        - iterable meaning able to parse through with numbers (like the indices of an array)
    - for of loops are best suited for working with arrays 
*/

//this code won't run because they do not have indices tied to them
let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}

for (let item of student) {
    console.log(item);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat of catArray) {
    console.log(cat, 'says meow'); //we see the values + says meow bc iterates over the array
}