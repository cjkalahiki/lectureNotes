/*
    Conditionals
        - falsy value: a value that is considered false when encountered in boolean context
            - 6 falsy values in JS
                1. false
                2. 0 (or false)
                3. "", '', `` all evaluate to false
                4. null 
                5. undefined
                6. Nan (not a number) 
*/

if (undefined) {
    console.log('will it run?');
} // returns nothing bc the conditional evaluated to false, so the body code was not ran

let isOn = true;
if (isOn == true) {
    console.log('It is true!');
}

/*
    - JavaScript allows us to reference a variable that's already been declared and assign it a new value (or reinitialize that variable), but we cannot declare two variables with the same name
    - general rule of thumb: 
        - when declaring a new variable, the variable name needs to be prefaced by one of our 3 available JS keywords to declare a new variable (var, let, const)
        - when assigning a new value to a variable that already exists, we simply just need to reference a variable that's already been named
*/  