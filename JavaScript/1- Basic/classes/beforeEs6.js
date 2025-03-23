// Before ES6
export function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getFullName = function() {
        return `${this.name} ${this.age}`;
    }
}