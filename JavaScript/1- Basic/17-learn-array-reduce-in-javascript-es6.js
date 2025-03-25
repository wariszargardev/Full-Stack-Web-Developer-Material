// reduce is a method that returns a single value by applying a function to each element of the array

const points = [18, 26, 13, 24, 5]
const totalPoints  = points.reduce((acc, value) => acc + value)
console.log(totalPoints)

const totalPointsWithDefault  = points.reduce((acc, value) => acc + value, 500)
console.log(totalPointsWithDefault)

const members = [
    {name: 'John', score: 100, city: 'New York'},
    {name: 'Jane', score: 200, city: 'Los Angeles'},
    {name: 'Jim', score: 300, city: 'Chicago'},
    {name: 'John', score: 400, city: 'New York'},
    {name: 'Jane', score: 500, city: 'Los Angeles'},
    {name: 'Jim', score: 35, city: 'Chicago'},
    {name: 'John', score: 30, city: 'New York'},
    {name: 'Jane', score: 25, city: 'Los Angeles'},
    {name: 'Jim', score: 35, city: 'Chicago'},
]

const scores = members.map((member) => member.score)

// acc is the accumulator and value is the current value
// acc is the value of the previous iteration
// value is the current value of the array
// 0 is the initial value of the accumulator    

const totalScores = scores.reduce((acc, value) => acc + value)
console.log(totalScores)


const anotherWayOfReduce = members.reduce((acc, value) => acc + value.score, 0)
console.log(anotherWayOfReduce)