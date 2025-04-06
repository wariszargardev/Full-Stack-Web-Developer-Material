const a = 10;
let b = 20;
var c = 30;

if (true) {
    const a = 100;
    let b = 200;
    var c = 300;
}

// C value will be showing of last value whihc is set in if block 300
// but a and b value will be showing of global scope 10 and 20

console.log(a, b, c);

// var is not block scoped it is function scoped
// let and const are block scoped
// {} is called block scope in js and outside of it is global scope


function one () {
    const username = "Waris";

    // This is called nested function or inner function
    // Child function can access the parent function variables
    function two () {
        const website = "youtube";
        console.log(username);
    }

    two();
    // Website is not defined because it is not in the scope of two function
    // console.log(website);
}
one()