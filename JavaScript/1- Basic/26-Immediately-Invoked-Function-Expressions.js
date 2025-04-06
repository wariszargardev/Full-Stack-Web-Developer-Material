// IIFE is a function that is executed immediately after it is defined.
// It is a design pattern that is used to create a new scope and avoid polluting the global namespace.
// It is also known as a Self-Invoking Anonymous Function.

(
    () => {
        console.log("DB CONNECTED");
    }
)();

// We need to stop this function from being called again
// using of semicolon is a good practice
(()=>{
    console.log("DB CONNECTED");
})();


((name) => {
    console.log(`DB CONNECTED ${name}`);
})("Waris");
