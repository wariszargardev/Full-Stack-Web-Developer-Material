// Reference Article: https://www.geeksforgeeks.org/difference-between-regular-functions-and-arrow-functions

// Simple function
function getInfo (name, age) {
    return `Name: ${name} Age: ${age}`;
}

console.log(getInfo('Waris', 20));

// Arrow function
const getInfo1 = (name, age) => {
    return `Name: ${name} Age: ${age}`;
}
console.log(getInfo1('Waris', 20));

// Arrow function with single line and without return keyword
const getInfo2 = (name, age) => `Name: ${name} Age: ${age}`;
console.log(getInfo2('Waris', 20));


// Simple syntax for arrow function
// () => {}
// implicit return means without return keyword and without curly braces
// () => 'Hello World'
// (name) => 'Hello ' + name

// Explicit return means with return keyword and with curly braces
// (name) => { return 'Hello ' + name; }  


                                                                            // Syntax
// 1- Regular function
function simpleFunctionName() {
    // code
}

// 2- Arrow function
const arrowFunctionName = () => {
    // code
}

                                                                             // This Binding	
// 1- Regular function
// {} this is the calling context.
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        // this depends on the calling context.	
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());

// 2- Arrow function
const surroundingFirstName = "Waris";
const surroundingLastName = "Zargar";
const person1 = {
    firstName:"John",
    lastName: "Doe",
    fullName: () => {
        // this depends on the context surrounding scope
        // this is not the calling context
        // this will return undefined for firstName and lastName
        return "arrow function " + this.firstName + " " + this.lastName + " " + surroundingFirstName + " " + surroundingLastName;
    }
}
console.log(person1.fullName());

                                                                                // Arguments Object	
// 1- Regular function

function showArgs() {
    console.log(arguments);
}

function showArgs1(...args) {
    console.log(args);
}
showArgs(1, 2, 3, 4, 5);
showArgs1(1, 2, 3, 4, 5);
// [Arguments] { '0': 1, '1': 2, '2': 3, ...... }


// 2- Arrow function
const showArgsArrowMethods = () => {
    console.log(arguments);
    // arguments is not defined in arrow function because arrow function does not have arguments object
}
const showArgsArrowMethods1 = (...args) => {
    console.log(args);
}
// showArgsArrowMethods(1, 2, 3, 4, 5);
showArgsArrowMethods1(1, 2, 3, 4, 5);

                                                                                    // Constructor Usage

// 1- Regular function
function Person(name) {
    this.name = name;
}
const p = new Person('Waris'); // Creates a new Person object
console.log(p.name); 

// 2- Arrow function
const Person1 = (name) => {
    this.name = name;
}
// const p1 = new Person1('Waris'); // Error: Person1 is not a constructor
// console.log(p1.name);



                                                                                    // Hoisting
// 1- Regular function
// In regular functions, function declarations are hoisted to the top of their scope,
// allowing them to be called before they’re defined in the code.
console.log(hoistingFunction()); // Hello World
function hoistingFunction() {
    return 'Hello World';
}
// 2- Arrow function
// Arrow functions are not hoisted. They must be defined before they are called.
// console.log(hoistingArrowFunction()); // Error: hoistingArrowFunction is not a function
const hoistingArrowFunction = () => {
    return 'Hello World';
}
                                                                                    // Implicit Return	
// 1- Regular function
// Explicit return
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// 2- Arrow function
// Implicit return
const add1 = (a, b) => a + b;
console.log(add1(2, 3)); // 5
                                                                                    // Methods as Object Properties	or this binding

// 1- Regular function
const person2 = {
    name: 'Waris',
    getName: function() {
        return this.name;
    }
}
console.log(person2.getName());

// 2- Arrow function
const person3 = {
    name: 'Waris',
    getName: () => {
        return this.name;
    }
}
console.log(person3.getName()); // undefined
