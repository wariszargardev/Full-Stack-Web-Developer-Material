// https://medium.com/@sanjeevanibhandari3/your-map-is-slower-than-you-think-heres-how-to-speed-it-up-7773c25076b3

// ES6   introdcued new methods for arrays

// forEach
// map
// filter
// reduce
// find
// findIndex

// Before ES6
const scores = [12,36,54,21,69,23,78]
for (const point of scores) {
	console.log (`${point > 50 ? "Higher": "Lower"} than 50`)
}

// After ES6
// forEach is used to iterate over an array and execute a function for each element
// It will not return anything

scores.forEach(score => {
	console.log (`${score > 50 ? "Higher": "Lower"} than 50`)
})

// map
// map is used to create a new array by applying a function to each element of the original array
// It will return a new array

const doubleScoreArray= scores.map( score => score * 2)
console.table(doubleScoreArray)

const higerThanFifty = []
const lowerThanFifty = []

scores.map((score) => {
	if (score > 50) {
		higerThanFifty.push(score)
	} else {
		lowerThanFifty.push(score)
	}
})

console.table(higerThanFifty)

const scoreWords = scores.map((score) => {
	return score > 50 ? "Higher" : "Lower or equal"
})
console.log(scoreWords)
console.table(scoreWords)
