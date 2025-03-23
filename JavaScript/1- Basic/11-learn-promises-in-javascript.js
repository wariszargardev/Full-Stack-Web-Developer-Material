// Javascript is a single threaded language & blocking language
// It means can handle only one task at a time

const sayHi = () => console.log('Hi');
const askAboutToday = () => console.log('How was your day?');
// Settimeout is a asynchronous function which will run in the background
// It will not block the main thread
// It will run after the main thread is finished
const simpleMessage = () => setTimeout(() => console.log('Simple Message'), 2000);
const sayGoodbye = () => console.log('Goodbye');

sayHi();
simpleMessage();
askAboutToday();
sayGoodbye();


// Promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
const promise = new Promise((resolve, reject) => {
    const isCondition = true;
    if (isCondition) {
        resolve('Promise resolved');
    } else {
        reject('Promise rejected');
    }
});


promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

// When we have multiple promises, we can use promise.all to run them in parallel
// promise.all([promise1, promise2, promise3]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });


