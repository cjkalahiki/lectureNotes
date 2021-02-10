/*
    - return keyword allows us to take data from inside of a function, and return it so we can access it and use that data elsewhere
*/

let resource = "|=========|"

function machine(ironRod) {
    let screws;

    if(ironRod){
        screws = '|---- |---- |----'
    } else {
        console.log('not fed any resources');
    }

    return screws;
}

//set variable equal to the function
let powerOn = machine(resource);
console.log(powerOn);

//block body arrow function

let myName = (fName,lName) => {
    let fullName = `${fName} ${lName}`;
    return fullName;
}

let powerOn = myName('Connor', 'Kalahiki');
console.log(powerOn);

//concise arrow body
let theName = (fName, lName) => fName + ' ' + lName; //bc cannot declare vars, just jump straight to the return value
let daName = theName('c', 'k');
console.log(daName);

/*
CHALLENGE
************
    Make a tip calculator using a function (15%)
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tipCalc(cost, percentage) {
    let estimate = cost * (percentage/100);
    return estimate.toFixed(2);
}

let tip = tipCalc(22.50, 20);
console.log(tip);


let theTip = (cost,percentage) => (cost * (percentage/100)).toFixed(2);
console.log(theTip(20.25,15));