let weather = 75;

if (weather < 70) {
    console.log("Wear jacket.");
} else {
    console.log("No jacket needed.");
}

/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'

    Silver:
    If It is your name, console log 'Hello, my name is <name>'

    Gold:
    If it is not your name, console log 'Hello, is your name <name> ?'
*/

let fullName = "Connor Kalahiki";

if (fullName == 'Connor Kalahifki') {
    console.log('Hello, my name is', fullName);
} else {
    console.log(`Hello, is your name ${fullName}?`); //string interpolation: use backticks, not quotations
}

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'

    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string without the first letter, and change them to lowercase

    Gold:
    If the first letter of a string is uppercase, console.log that first letter of the string, plus the rest of the string to lowercase
    If the first letter is not uppercase, console.log the first letter of the string to uppercase, plus the rest of the string to lowercase
*/

//Bronze
let name = 'zAchARy';
let upperCase = name.toUpperCase(); // upperCase = ZACHARY

if (name[0] == upperCase[0]) {
    console.log(name);
} else {
    console.log('hey, this isn\'t written correctly'); // use the tilda key for the isn`t
}

//Silver
let sliceString = name.slice(1); // sliceString = AchARy

if (name[0] == upperCase[0]) {
    console.log(name[0]); 
} else {
    console.log(sliceString.toLowerCase());
}

//Gold
if (name[0] == upperCase[0]) {
    let isUpperCase = name[0] + sliceString.toLowerCase(); 
    console.log(isUpperCase);
} else {
    let notUpperCase = name[0].toUpperCase()+ sliceString.toLowerCase();
    console.log(notUpperCase); //because name[0] = 'z' and is lowercase, we run the else code
}

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 20;

//if you want to write without ambersand, have to write from 25->17 bc read top to bottom

if (age <= 17){
    console.log('Sorry, you\'re too young to do anything.');
} else if (age >= 18 && age < 21) {
    console.log ('You can vote!');
} else if (age >= 21 && age < 25) {
    console.log ('You can drink!');
} else if (age >= 25) {
    console.log('You can rent a car!');
} else { // good to have this catch all in case code doesn't run properly
    console.log(age);
}