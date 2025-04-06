// This is singletion object
const newObj = new Object();

const regularUser = {
    name: "Waris",
    fullname: {
        userfullname: {
            firstname: "Waris",
            lastname: "Zargar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// to avoid error if the property is not present
console.log(regularUser.fullname?.userfullname?.firstname);


const object1 = {
    name: "Waris",
    age: 20,
}
const object2 = {
    name1: "Ali",
    age1: 30,
}

// {} is the target object
const object3 = Object.assign({}, object1, object2)
console.log(object3);

const object4 = {...object1, ...object2}
console.log(object4);

console.log(Object.keys(object4));
console.log(Object.values(object4));
console.log(Object.entries(object4));
console.log(object4.hasOwnProperty("name"));
