/*
    - forEach () method
        - the forEach() executes a function once for each element in an array
        - same functionality as a for loop
*/
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//regular for loop
for (let i = 0; i<food.length; i++) {
    console.log(food[i]);
}

//forEach - function declaration
food.forEach(function(foodItem) {
    console.log(foodItem);
});

/*
CHALLENGE
************
    - (Go look at MDN docs if you need a reminder):
    - Create an array containing movies
    - Use the .forEach() method to list your movies
    - Add another movie at the end of the array
    - And replace one of your existing movies with another one
*/

let movies = ['Iron Man', 'Black Panther', 'Captain America', 'Captain Marvel', 'Spider-Man'];
movies.forEach(function(movieItem){
    console.log(movieItem);
})

movies.unshift('Black Widow');
console.log('unshift:', movies);

movies.splice(2, 1, 'Thor');
console.log('splice:', movies);

/*
CHALLENGE
************
    - (Go look at MDN docs/w3 schools if you need a reminder):
    - Create an array containing movies
    - Use the .forEach() method to list your movies
    - Add another movie at the end of the array
    - And replace one of your existing movies with another movie
*/
let movies = ['Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
movies.push('Force Awakens');
movies.splice(3, 1, 'The Rise of Skywalker');
movies.forEach(movie => console.log(movie)); // remember that parentheses are not needed when only a single parameter is present when working with fat arrow functions