// rest operator is used to pass a variable number of arguments to a function 
// The spread operator is used to pass an array to functions that normally require a list of many arguments.
// ...args is the rest operator

const sumOfNumber = (a, b, ...arg) =>{
    let sum = a+ b;
    arg.forEach(value => (sum += value))
    return sum;
}

console.log(sumOfNumber(1, 2));
console.log(sumOfNumber(1, 2, 3));
console.log(sumOfNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// ...arr is the spread operator
// we want to create a new array using the elements of an existing array we use the spread operator
// We can use the spread operator on both arrays and objects

const user = {
    name: "Waris",
    age: 22
};

const cart = {
    items: [
        {name: "Apple", price: 100, unit: 2},
        {name: "Orange", price: 200, unit: 3},
    ]
}

const deliveryAddress = {
    city: "Lahore",
    country: "Pakistan"
}; 

const purchaseInformation = {
    ...user,
    ...cart,
    ...deliveryAddress
}

console.log(purchaseInformation);


const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const thirdArray = [7, 8, 9];

const finalArray = [...firstArray, ...secondArray, ...thirdArray];
console.log(finalArray);