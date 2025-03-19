// Template Literals (ES6)
// Template literals are string literals allowing embedded expressions.
// You can use multi-line strings and string interpolation features with them.
// back-ticks (``) are used to define a template literal.
// Interpolated expressions are enclosed in ${}.
// Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes. 

const name = 'Waris';
const age = 30;
const job = 'Web Developer';
console.log(`Hello, my name is ${name} and I am ${age} years old. I am a ${job}.`);

const baseUrl = 'https://swapi.dev/api/';

// fetch(`${baseUrl}people/1/`)
//   .then(response => response.json())
//     .then(data => console.log(data));

// fetch(`${baseUrl}people/2/`)
//   .then(response => response.json())
//     .then(data => console.log(data));


// String Concatenation (Before ES6)
const name1 = 'Waris';
const age1 = 30;
const job1 = 'Web Developer';

console.log('Hello, my name is ' + name1 + ' and I am ' + age1 + ' years old. I am a ' + job1 + '.');
// Using String.concat() Method
console.log('Hello, my name is '.concat(name1, ' and I am ', age1, ' years old. I am a ', job1, '.'));


// You can use multi-line strings and string interpolation features with them.
// Old way
console.log("person 1 Muhammad Waris \nperson 2 Muhammad Ali \nperson 3 Muhammad Asif");

// New way ES-6 Template Literals 
console.log(`person 1 Muhammad Waris
person 2 Muhammad Ali 
person 3 Muhammad Asif`);