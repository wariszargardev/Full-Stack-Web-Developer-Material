// Before ES-6
const createPerson = (name, age, admin) => {
    return {
        name: name,
        age: age,
        isAdmin: admin
    }
}
console.log(createPerson('Waris', 30, false));
console.log(createPerson('Waris', 30, true));

// After ES-6 (Shorthand Property Names)
const createPerson1 = (name, age, admin) => {
    return {
        name,
        age,
        isAdmin: admin
    }
}
console.log(createPerson1('Waris', 30, false));
console.log(createPerson1('Waris', 30, true));


// Computed Property Names
const specialProperty = 'nationaity';
const religionProperty = 'religion';
const person = {
    name: 'Waris',
    age: 30,
    [specialProperty]: 'Pakistani'
}
person[religionProperty] = 'Islam';
console.log(person); 


// More relevant example
const makeDynamicObjet = (key, value) => {
    return {
        [key]: value
    }
}

console.log(makeDynamicObjet('name', 'Waris'));
console.log(makeDynamicObjet('age', 30));
console.log(makeDynamicObjet('isAdmin', true));


// Another Example 
const userObject =  {
    fname: 'Waris',
    lname: 'zargar',
    // Before ES-6
    fullName: function(){
        return `${this.fname} ${this.lname}`;
    },
    // After ES-6
    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}

console.log(userObject.fullName());
console.log(userObject.getFullName());