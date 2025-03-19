// Const is a keyword that is used to declare a constant variable. A constant variable is a variable that cannot be reassigned a new value.
// If you try to reassign a new value to a constant variable, you will get an error.
// Since reference to their value is readonly
// Const is block-scoped, which means that a variable declared with const is only available within the block it is declared.
const name = 'Waris';


// Variable with declare with let keyword can be reassigned
// It's a good practice to use let instead of var because let is block-scoped, while var is function-scoped.
let age = 20;
age = 21;

for (let i = 0; i < 3; i++) {
    // Value of i is accessible inside the block only because it's block scoped
    console.log("Inside const " + i);
}
// This will give an error because i is block scoped & it's not accessible outside the block
// for is a block for i variable
console.log("Outside const " + i);


// Var is a keyword that is used to declare a variable. A variable declared with var can be reassigned.
var country = 'Pakistan';
country = 'USA';

for (var i = 0; i < 3; i++) {
    console.log("Inside var " + i);
}
// This will not give an error because i is function scoped & it's accessible outside the block
// for i it's value is 3 because it's incremented in the loop
console.log("Outside var " + i);

// This will not give an error because const is block scoped
function checkPassword(password) {
    if (password === '1234') {
        // This will not give an error because message is block scoped this message is not redefine in the block
        const message = 'Password is correct';
        console.log(message);
    } else {
        // This will not give an error because message is block scoped this message is not redefine in the block
        const message = 'Password is incorrect';
        console.log(message);
    }
}
checkPassword('1234');
checkPassword('12345');


// If we cannot define var variable with cause the unexpected result


var number = 10;
{
    var number = 20;
    console.log("Inside block " + number); // 20
}

console.log("outside block " +number); // 20



// It's block sock and after block it will set to it's original value
let number1 = 10;
{
    let number1 = 20;
    console.log("Inside block " + number1); // 20
}
console.log("outside block " + number1); // 10


// 1- Var variable value is by default undefined in memory
// 2- Let variable value is not defined in memory
// 3- Const variable value is not defined in memory