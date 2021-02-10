let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//push - allows us to add one or more items to end of an array
// let moreFood = ['custard pie', 'pistachio'];
// food.push(moreFood)

// console.log(food[5][1]) //if you push an array, it will output the entire array, so need to do the [][] to access indices

food.push('Pizza')

//splice - allows us to remove, replace, or add new elements to the array
food.splice(4, 1); //at index 4, cut one item
console.log('splice:', food);

food.splice(2, 0, 'Lollipops'); //doesnt delete anything but adds a new value
console.log('splice 2:', food);

console.log(food[2]); //the lollipops inherit the index value 2 

// pop - allows us to remove last item of an array
food.pop();
console.log('pop:', food); //removes Pizza

// shift - allows us to remove the first item of an array
food.shift();
console.log('shift:', food); //removes Pecan Pie

//unshift -- allows to add one or more items to beginning of an array
food.unshift('Popcorn', 'Steak');
console.log('unshift:', food);