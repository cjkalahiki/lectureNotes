/*
    - object bracket notation [] can also be used to reference or pull values out of an object
        - use dot notation most of time, but use [] for cases or preference

        -ALL keys in objects are strings
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

// different from dot notation, keys need to wrapped in quotes
let zucchini = garden['vegetable'];
/*
    - we can access keys by specifying object name followed by [] containing 'key name' 
*/
console.log(zucchini);

// we can also use [] notation to set key/value pairs for objects
let baking = {};
baking['zucchini'] = 'better make some bread'; //set a key of zuchhini to the string
console.log(baking);

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}
console.log(baking[garden['vegetable']]); //this outputs better make some bread

let testObj = {
    "Spaces here": true, //if want spaces in key name, wrap it in quotes
    noSpaces: true
}

console.log(testObj.nospaces);
console.log(testObj["Spaces here"]);//need to use [] notation for keys with spaces