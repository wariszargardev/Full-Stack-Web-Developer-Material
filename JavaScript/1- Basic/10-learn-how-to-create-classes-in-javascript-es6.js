import { Person } from './classes/beforeEs6.js';
import {User} from './classes/afterEs6.js';
import {Admin} from './classes/inheritance.js';

const person = new Person('Muhammad Waris',30);
console.log(person.getFullName());

const user = new User('Muhammad', 'Waris');
console.log(user.getFullName());

user.setFName('Ali');
console.log(user.getFullName());

user.setLName('Khan');
console.log(user.getFullName());

const simpleUser = new Admin('Waris', 'Ali');
const superAdmin = new Admin('Muhammad', 'Waris', 'Admin');

console.log(simpleUser.getRole());
console.log(superAdmin.getRole());
console.log(simpleUser);
console.log(superAdmin);