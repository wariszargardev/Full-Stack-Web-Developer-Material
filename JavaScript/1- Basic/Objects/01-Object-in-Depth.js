// Object.create() => will create singleton object 

// When we create object using literal it is not singleton object
// When we create object using constructor it is singleton object

// Object literals

const symbol = Symbol("key1")

const JsUser= {
    "full name": "Muhammad Waris",
    name: "Waris",
    age: 28,
    email: "Waris@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Wednesday', 'Friday'],
    address: {
        city: "Sargodha",
        street: "kohlowala"
    },
    [symbol]: "mysymbol",
    userInfo(){
        return `name ${this["full name"]} age ${this.age} `
    }
}

// we can access
console.log(JsUser.name)
console.log(JsUser['full name'])
console.log(JsUser['name'])
console.log(JsUser[symbol])
console.log(typeof JsUser[symbol])

JsUser.name = "Ali"
JsUser['age'] = 21
console.log (JsUser)

// It will not allow to update Object value but will not throw any error
// Object.freeze(JsUser)

console.log(JsUser.userInfo())
JsUser.getUserAddress = function() {
    return `user city ${this.address.city} street ${this.address.street}`
}

console.log(JsUser.getUserAddress())