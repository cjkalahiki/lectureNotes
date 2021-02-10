/*
    - array destructuring allows us to unpack values from an array and set them equal to variables
        - destructuring uses similar syntax as array literals, but is instead on left hand side of operatork, which is where we define what values to unpack from sourced var

    - good for pulling info out of an array/object and assigning data to its own variable
*/

let fullName = ['Patrick', 'Star'];

// let firstName = fullName[0];
// let lastName = fullName[1];

//variables stored by position, so firstName = fullName[0]
let [firstName, lastName] = fullName;  //they already hold the values we want to pull out
console.log(firstName, lastName);

/*
    REST SYNTAX
        - looks exactly like spread syntax (denoted by ...)
        - opposite of the spread
            • spread expands an array into a list of comma separated items while rest colelcts multiple elements and condenses them into a single element
*/

let fullName = ['Zach', 'Maynard', 'Mr', {month: 12, date: 18, year: 1992}];
//use rest to package up the REST of the values in referenced array, returning them as their own array
let [firstName, lastName, ...otherInfo] = fullName; //... rest syntax to package the otherInfo
console.log(otherInfo);

//values can be skipped or ommitted too
let fullName = ['Zach', 'Maynard', 'Mr', {month: 12, date: 18, year: 1992}];
fullName.push('testOne', 2, 'testThree', 4, true, false);

let [firstName, lastName,/*skip*/,/*skip*/,...otherInfo] = fullName;
console.log(otherInfo);

/*
    OBJECT DESTRUCTURING
*/
let user = {
    username: 'testuser',
    is_verified: true
};

let {username, is_verified} = user;
console.log(username);

const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, //renamed variable
    translations: [
        {
            title: localeTitle //renamed varible
        }
    ]
} = metadata;

console.log(localeTitle);

const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];

for (let { name: n, family:{ father: f } } of people){ //for of is iterable
    console.log(`${n} and ${f}`);
}