const user = {
    name: "Waris",
    age: 20,
    email: "waris@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Destructuring key should be same as the property name
const {lastLoginDays} = user;
console.log(lastLoginDays);

// Destructuring with alias or custom name
const {username: name} = user;
console.log(name);

// JSON API
// JSON is a lightweight data interchange format.
// JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.
// JSON is a lightweight data interchange format.
// JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.

// {
//     "name": "Waris",
//     "age": 20,
//     "email": "waris@google.com",
//     "isLoggedIn": false,
//     "lastLoginDays": ["Monday", "Saturday"]
// }




// [
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
//     {},
// ]


Object.entries(user).forEach(user => {
    const [key, value] = user
    console.log(`Key ${key} value ${value}`)
})
