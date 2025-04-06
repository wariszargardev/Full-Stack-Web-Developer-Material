
const users = [
    {name: "Waris", age: 30, salary: 1000, email:"waris@gmail.com"},
    {name: "Ali", age: 20, salary: 2000, email:"ali@gmail.com"},
    {name: "Ahmad", age: 25, salary: 3000, email:"ahmad@gmail.com"},
    {name: "Ahsan", age: 63, salary: 2000, email:"ahsan@gmail.com"},
    {name: "wwewew", age: 15, salary: 2000, email:"wwewew@gmail.com"},
]
const emails = users.map ((user) => user.email)
console.log(emails)

const above25User = users.filter ((user) => user.age > 25)
console.log(above25User)

const above30User = users.filter(user => {
    return user.age > 30
})
console.log(above30User)

const above25UsersForEach = [];

users.forEach ((user) => {
    if (user.age > 25){
        above25UsersForEach.push(user)
    }
})

console.table(above25UsersForEach)

const above25And1000 = users.filter ((user) => {
    return user.age > 25 && user.salary > 1000
})
console.table(above25And1000)


// map

const numbers = [1,2,3,4,5,6,7]

const doubleNumbers = numbers.map((number) => number * 2)
console.log(doubleNumbers)

// chaining 
const sumMultiply = numbers
.map((number) => number * 10)
.map((number) => number + 1)
console.log(sumMultiply)



// chaining 
const sumMultiplyAndFilter = numbers
.map((number) => number * 10)
.map((number) => number + 1)
.filter((number) => number > 32)
console.log(sumMultiplyAndFilter)

const sumMultiplyAndFilterAndReduce = numbers
.map((number) => number * 10)
.map((number) => number + 1)
.filter((number) => number > 32)
.reduce((acc, num) => acc + num, 0)
console.log(sumMultiplyAndFilterAndReduce) 



const salary = [100,200,300,400,500,600,700]

const sumValue = salary.reduce ((acc, number) => acc + number, 0)
console.log("sumValue " ,sumValue )