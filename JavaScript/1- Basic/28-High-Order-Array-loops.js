const countries = ['Pakistan', 'Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

for (const country of countries) {
    console.log(country.toUpperCase())
}

const greetings = 'Hello World'
for (const greet of greetings) {
    console.log(greet)
}

const maps = new Map()
maps.set('a', "1")
maps.set('b', "2")

for (const map of maps) {
    console.log(map)
}

for (const [key, value] of maps) {
    console.log(key, value)
}

for (const key in countries){
    console.log(`Key: ${key} and value is ${countries[key]}`)
}

const userInfo = {
    name: "Waris",
    age: 30,
    salary: 1000,
    email:"waris@gmail.com"
}

for (const user of Object.entries(userInfo)){
    console.log(user)
}

for (const [key, value] of Object.entries(userInfo)){
    console.log(`Key: ${key} and value is ${value}`)
}

for (const key in userInfo){
    console.log(`user key ${key} and value is ${userInfo[key]}`)
}

countries.forEach(country => {
    console.log (`Country name is: ${country}`)
})

const users = [
    {name: "Waris", age: 30, salary: 1000, email:"waris@gmail.com"},
    {name: "Ali", age: 20, salary: 2000, email:"ali@gmail.com"},
    {name: "Ahmad", age: 25, salary: 3000, email:"ahmad@gmail.com"},
]


const printUserInfo = (user) => {
    console.log(`Name ${user.name} Age ${user.age} Salary ${user.salary}`)
}

// users.forEach (user => printUserInfo(user))
// This will print the user info for each user in the array
users.forEach (printUserInfo)

users.forEach((user, index, arr) => {
    console.log(`Name ${user.name} Age ${user.age} Salary ${user.salary} Index ${index} Array ${arr}`)
})