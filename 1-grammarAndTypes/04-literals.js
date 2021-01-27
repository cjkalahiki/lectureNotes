/*
    Literals
        - represents a fixed value
            • literals include:
                - string literal
                - numeric literal
                - boolean literal
                - object literal
                - array literal
        - the coder assigns these values, they are not external
*/

//string literal
let car = 'Ford';

//numeric literal
let december = 12;

//boolean literal
let on = true;

//object literal
let album = {
    songs: 3,
    runTime: 35,
    rating: 10
}

console.log(album.rating);

/*
    -when working with objects, using dot notation allows us to dive into the object to grab specific data 
*/

//array literal
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days[0]);

/*
arrays are zero-indexed
*/

console.log(days.length);