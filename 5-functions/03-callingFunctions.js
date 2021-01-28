function hello() {
    console.log('hey there');
}

hello(); //correct

console.log(hello()); // returns hey there and undefined bc runs function first 

/*
CHALLENGE
************
    - Create a function that, when invoked, lists out the numbers 1-10
*/

//now it lists numbers from 1 - x
function listNum(x) {
    for (let i = 0; i < x; i++){
        console.log(i + 1);
    }
}

listNum(15);

/*
CHALLENGE
************
    - Given the array, create a function that lists out the values individually.
*/
let arr = ['This', 'is', 'really', 'cool'];

function printArray() {
    for (let i of arr){
        console.log(i);
    }
}
printArray();