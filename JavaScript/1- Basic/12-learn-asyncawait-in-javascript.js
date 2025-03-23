const myPromiseFunction = () => {
	return new Promise ((res, rej) => res("All Done First"))
}

const firstMethod = () => {
	console.log (myPromiseFunction().then(res => console.log(res)))
	console.log("All Done Second")
}

// This will log All Done Second first and then All Done First
// This is because the promise is resolved asynchronously
firstMethod()

// Async Await is a way to handle promises in a more readable and synchronous way
const secondMethod = async () => {
	await myPromiseFunction().then (res => console.log(res))
	console.log("All Done Second")
}
// This will log All Done First first and then All Done Second
// This is because the promise is resolved synchronously
// It will wait for the promise to be resolved before logging the second message
secondMethod();

// This is called an Immediately Invoked Function Expression (IIFE)
(() => {
    console.log("-------------------------------- Async Await --------------------------------");
})();


// Second Example with fetch
(async () => {
	const data = await fetch("https://dog.ceo/api/breeds/image/random");
	const jsonData = await data.json()
	console.table(jsonData)
})();