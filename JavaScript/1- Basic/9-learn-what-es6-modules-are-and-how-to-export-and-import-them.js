// ES-5 
// We can use module.exports to export the module & require to import the module
// const sum = require('./modules/ES-5/module.export');
// console.log(sum(1, 2));

// ES-6
// We can use export/import to export and import named exports from modules
import { userInfo } from './modules/ES-6/singleExport.js';
import { employeeInfo, studentInfo } from './modules/ES-6/multipleExport.js';
import * as User from './modules/ES-6/multipleExport.js';
import { bookInfo, carInfo } from './modules/ES-6/exportObject.js';
import userLogin, { logout } from './modules/ES-6/mixExport.js';


console.log(userInfo('Muhammad Waris', 20));
console.log(employeeInfo('Muhammad Waris Zargar', 20));
console.log(User.employeeInfo('Muhammad Waris', 20));
console.log(User.studentInfo('Muhammad Waris Zargar', 20));
console.log(bookInfo('The Great Gatsby', 180));
console.log(carInfo('Toyota', 'Corolla'));
console.log(userLogin('Muhammad Waris', '123456'));
console.log(logout('Muhammad Waris', '123456'));

