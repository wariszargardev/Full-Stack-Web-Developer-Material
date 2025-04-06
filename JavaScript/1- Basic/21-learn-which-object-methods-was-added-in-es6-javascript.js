// Object assign method will changes the original object and return the new object
const user = {
    name: 'Waris',
    age: 20,
    city: 'Karachi'
}

const address = {
    street: 'Kohlowala',
    city: 'Gujranwala',
    state: 'PK',
    zip: '12345'
}

const userInfo =Object.assign(user, address);
// In this case user and userInfo are same object
// user is called target object and address is called source object
// in assign method first argument is target object and rest of the arguments are source objects 

console.log(userInfo);
console.log(user);

const user1 = {
    name: 'Waris',
    age: 20,
    city: 'Karachi'
}

const address1 = {
    street: 'Kohlowala',
    city: 'Gujranwala',
    state: 'PK',
    zip: '12345'
}


// If you want to create a new object and not change the original object, you can use spread operator
const data  = {...user1, ...address1};
console.log(data);
console.log(user1);

// Keys method will return an array of keys of the object

const objectKeys = Object.keys(data);
console.log(objectKeys);

// Values method will return an array of values of the object
const objectValues = Object.values(data);
console.log(objectValues);

// 
const isName = Object.keys(data).includes('name');
console.log(isName);

const isWarisValue = Object.values(data).includes('Waris');
console.log(isWarisValue);


const allData =   Object.entries(data);
console.log(allData);

const mapUser = new Map(allData);
console.log(mapUser); 

allData.forEach(([key, value]) => {
    console.log(key, value);
})

Object.entries(data).forEach(user => {
    const [key, value] = user;
    console.log(key, value);
})

console.log(data.hasOwnProperty("name"));