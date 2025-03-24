
// We are holding promise in object
const firstPromise = new Promise(function(res, rej){
	setTimeout (function(){
		console.log("Task 1 is complete")
	}, 1000)
});

firstPromise.then(function(){
	// This log will never print basically we are not connect this than with promise resolve
	console.log("firstPromise consumed")
})

const secondPromise = new Promise(function(res, rej){
	setTimeout (function(){
		console.log("Task 2 is complete")
		// This res is connected with then 
		res()
	}, 1000)
});

secondPromise.then(function(){
	// This log will never print basically we are not connect this than with promise resolve
	console.log("secondPromise consumed")
})

// First Task 2 is complete is printed & then secondPromise consumed is printed 


// We can directly use then without object

new Promise((res, rej) => {
	setTimeout (() => {
		console.log("Third task complete")
		res()
	}, 1000)
}).then(()=> console.log("Third promise consumed"));


// Passing Data to promisses
const fourthPromise = new Promise((res, rej) =>{
	setTimeout (() => {
		console.log("fourth promise complete")
		res({fname: "Muhammad", lname: "Waris"})
	}, 1000)
});

fourthPromise.then((res) => {
	console.log(`${res.fname} ${res.lname} `)
})

// We can also use catch to handle errors

const fifthPromise = new Promise((res, rej) =>{
	setTimeout (() => {
        const isError = false;
        if (isError){
        	rej("Process is not complete")
        } else {
        	res({fname: "Muhammad", lname: "Waris"})
        }
	}, 1000)
});

fifthPromise
.then((res) => {
    console.log(`${res.fname} ${res.lname}`)
    return res.fname;
})
.then(fname => console.log(`Chaining fname ${fname}`))
.catch(err => console.log(err))

// Multiple then is called chaining
// In next then we can pass data from previous then

// finally will call either promise is fail or resolve
const sixPromise = new Promise((res, rej) =>{
	setTimeout (() => {
        const isError = false;
        if (isError){
        	rej("Process is not complete")
        } else {
        	res({fname: "Muhammad", lname: "Waris"})
        }
	}, 1000)
});

sixPromise
.then((res) => {
    console.log(`${res.fname} ${res.lname}`)
    return res.fname;
})
.then(fname => console.log(`Chaining fname ${fname}`))
.catch(err => console.log(err))
.finally(() => console.log("Process complete"));


const seventhPromise = new Promise((res, rej) =>{
	setTimeout (() => {
        const isError = true;
        if (isError){
        	rej("Process is not complete")
        } else {
        	res({fname: "Javascript", lname: "Language"})
        }
	}, 1000)
});


// async await will use when we want to wait for promise to resolve to execute next line of code
// For example we want to fetch data from DB before fetching we want to connect with DB
// IF DB not connected then we can't fetch data
// Another example is we want to fetch data from API but we need to first login the user
// We can't login the user without fetching data from API

// Async Await can't directly handle the error we need to use try catch block 
async function consumePromiseSevven() {
	try {
		const response = await seventhPromise
		console.log(response)
	} catch (err) {
		console.log(err)
	}
}
consumePromiseSevven()


const getAllUuserUsingtryCatch = async () => {
    try {
    	const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    	const data = await response.json()
    	console.log(data)
    } catch (err){
    	console.log("error " , err)
    }
}

getAllUuserUsingtryCatch()

const getAllUuserUsingThenBlock = () => {
	fetch ('https://jsonplaceholder.typicode.com/users')
	.then (res => res.json())
	.then(users => console.log(users))
	.catch(err => console.log(err))		
}

getAllUuserUsingtryCatch()
getAllUuserUsingThenBlock()