// Javascript Execution Context

let var1 = 10;
let var2 = 5;

function addValue(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result = addValue(var1, var2);
console.log(result);


// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context


// Global Execution Context
// Always present in the code and store in this variable
// Has two phases

// 1- Memory Creation Phase
// 2- Code Execution Phase

// 1- Memory Creation Phase
// In memory creation phase,  the global object, var is created and the variables and functions are stored in the memory.

// var1 = undefined
// var2 = undefined
// addValue = ref
// result = undefined


// 2- Code Execution Phase
// In code execution phase, the code is executed line by line.

// var1 = 10
// var2 = 5
// addValue = ref

// to execute the function, we need to call it and for this agains seprate execution context is created
// 1 Memory execution thread
// 2 Code execution thread


// Once process is completed, the execution context is deleted and the memory is released and return to the global execution context



// Function Execution Context or Call Stack

// one() 
// two()
// three()

// Lifo concept is used in call stack 
// last in first out

