// Primitive Data Types use Stack Memory
// Passed by Value in JavaScript means that a copy of the actual parameter’s value is made in memory  i.e., a new memory allocation is done.
// So if you change the value of the copied variable, it will not affect the original variable.


// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Function Call Context:
// The stack also keeps track of function calls, including local variables and the execution context


function firstFunction() {
    let localVar1 = "Hello";
    secondFunction();
    console.log(localVar1);
  }
  
  function secondFunction() {
    let localVar2 = "World";
    console.log(localVar2);
  }
  
  firstFunction();


// firstFunction is called: its call context is pushed onto the stack.
// secondFunction is called from within firstFunction: its call context is pushed onto the stack.
// secondFunction finishes: its call context is popped off the stack.
// firstFunction continues: its call context is still on the stack.
// firstFunction finishes: its call context is popped off the stack

// Example 1

let num1 = 70
let num2 = num1

console.log(num1) // 70
console.log(num2) // 70

num1 = 40

console.log(num1) // 40
console.log(num2) // 70


// Example 2

function multiplication(tmp) {
    tmp = tmp * 50;
    return tmp;
}
var num = 30;
var result = multiplication(num);
console.log(num); // 30
console.log(result); // 1500


// Non-Primitive Data Types
// They are Passed by Reference (shared) it means that the reference is stored in the memory same location.
// So if you change the value of the copied variable, it will affect the original variable.


// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Map
// 7. Set
// 8. WeakMap
// 9. WeakSet
// 10. Promise
// 11. Error
// 12. ArrayBuffer
// 13. SharedArrayBuffer
// 14. DataView
// 15. TypedArray



let obj1 = {website: "Full Stack Developer"}
let obj2 = obj1;

console.log(obj1)     // {website: "Full Stack Developer"}
console.log(obj2)     // {website: "Full Stack Developer"}

obj1.website = "Full Stack Developer Updated"

console.log(obj1)     // {website: "Full Stack Developer"}
console.log(obj2)     // {website: "Full Stack Developer"}
