/*
    - switch statements execute a block of code when a 'case' is evaluated as true
    - used with a break keyword and a default keyword
        - break: breaks out of a case that has been evaluated as true, stopping execution of other cases. If no break keyword, next case
        in switch statement will be evaulted.
        - default: specifies code to run if none of the cases evaluate as true. Only one default per switch 
*/

let officeCharacter = 'Jim';

switch (officeCharacter) {
    case "Michael": 
        console.log('My mind is going a mile an hour.');
        break;
    case "Dwight":
        console.log('Perfectenshlag');
        break;
    case "Jim":
        console.log('Bears. Beets. Battlestar Galactica.')
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, do I know you?`); //no break bc its the end of the switch
}