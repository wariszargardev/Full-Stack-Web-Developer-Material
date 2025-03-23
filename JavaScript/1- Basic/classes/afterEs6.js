export class User{
    constructor(fName, lName){
        this.fName = fName
        this.lName = lName
    }

    getFullName(){
        return `${this.fName} ${this.lName}`
    }

    setFName(name){
        this.fName = name
    }

    setLName(name){
        this.lName = name
    }
}