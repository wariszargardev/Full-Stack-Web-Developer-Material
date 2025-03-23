import {User} from './afterEs6.js';

export class Admin extends User{
    constructor(fName, lName, role='User'){
        super(fName, lName)
        this.role = role
    }

    getRole(){
        return this.role
    }
} 