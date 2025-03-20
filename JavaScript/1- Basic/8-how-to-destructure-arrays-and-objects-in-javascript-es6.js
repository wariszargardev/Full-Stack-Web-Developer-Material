const person = {
    name: 'Waris',
    age: 30,
    city: 'Mumbai',
    isAdmin: true
}

// Destructuring Object
// Before ES6
const name1 = person.name;
const age1 = person.age;
const city1 = person.city;
const isAdmin1 = person.isAdmin;
console.log(name1, age1, city1, isAdmin1);

// After ES6
// If variable name is same as property name, we can use shorthand syntax
// If variable name is different from property name, we can use colon to rename it
const { name, age, city, isAdmin: admin } = person;
console.log(name, age, city, admin);

// If we want to assign default value to the variable, we can use = operator
const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    publisher: 'Scribner'
}
const {title, author, year=2020, publisher: bookPublisher} = book;
console.log(title, author, year, bookPublisher);

// Destructuring Array 
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Before ES6
const firstFruit1 = fruits[0];
const secondFruit1 = fruits[1];
const thirdFruit1 = fruits[2];
const fourthFruit1 = fruits[3];
console.log(firstFruit1, secondFruit1, thirdFruit1, fourthFruit1);

// After ES6
const [firstFruit, secondFruit, thirdFruit, fourthFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit, fourthFruit);

// Swapping values
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

let [min, max] = [9,3]
console.log(`Before swapping: min = ${min}, max = ${max}`);
if (min > max) {
    [min, max] = [max, min];
}
console.log(`After swapping: min = ${min}, max = ${max}`);

// Ignoring values
const numbers = [1, 2, 3, 4, 5];
const [first, , , , last] = numbers;
console.log(first, last);

// Rest operator

// Example 1
const numbers2 = [1, 2, 3, 4, 5];
const [first2, ...rest2] = numbers2;
console.log(first2, rest2);

// Example 2
const team = [
    {
        name: 'Waris',
        age: 30,
        role: 'boss'
    },
    {
        name: 'John',
        age: 25,
        role: 'developer'
    },
    {
        name: 'Jane',
        age: 30,
        role: 'designer'
    },
    {
        name: 'Jim',
        age: 35,
        role: 'manager'
    }
];
const [boss, ...developers] = team;
console.log(boss, developers);

// Assigning default values
const event = {
    eventName: 'Birthday Party',
}

const {eventName, date = '2025-01-01'} = event;
console.log(eventName, date);

// Nested Destructuring
const user = {
    userName: 'John',   
    userAge: 30,
    address: {
        userCity: 'New York',
        userCountry: 'USA'
    }
}

const {userName, userAge, address: {userCity, userCountry}} = user;
console.log(userName, userAge, userCity, userCountry);

// Destructuring Function Parameters
const printUser = ({userName, userAge, address: {userCity, userCountry}}) => {
    console.log(userName, userAge, userCity, userCountry);
}

printUser(user);

// Destructuring with Rest Parameters
const sum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Practicle Example
// We are destructuring the dogs object and passing relevant properties to the fetchDogs function
const fetchDogs = async ({ breed }) => {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching dog images:', error);
    }
}

const dogs = {
    name: 'Buddy',
    breed: 'labrador', // Fixed spelling from 'bread' to 'breed'
    color: 'black',
    age: 3,
    gender: 'male'
};

// We are passing the dogs object to the fetchDogs function
await fetchDogs(dogs);

console.table(dogs);
console.table(fruits);