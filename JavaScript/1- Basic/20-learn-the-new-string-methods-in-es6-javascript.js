const str = "Hello World ";
console.log(str.repeat(3))

const str2 = "Hello World";

// Return boolean value
console.log(str2.startsWith("H")) // true
console.log(str2.endsWith("d")) // true
console.log(str2.includes("o")) // true

console.log(str2.indexOf("o")) // 4
console.log(str2.lastIndexOf("o")) // 7

// Start with use second parameter to specify the position to start the search 
// In other it will skip the first 4 characters and search for "o" from the 5th character
console.log(str2.startsWith("o", 4)) // true 
console.log(str2.startsWith("W", 4)) // false
console.log(str2.startsWith("W", 6)) // false

// Check if the second argument first characters of string ends with mentioned string
const str3 = "Hello world, welcome to the universe";
console.log(str3.endsWith("world", 11)) // true
console.log(str3.endsWith("world")) // false
console.log(str3.endsWith('welcome', 20)) // true

const url = "https://www.google.com/search?q=javascript";
console.log(url.includes("https")) // true
console.log(url.includes("google")) // true
console.log(url.includes("GOOGLE")) // false
console.log(url.includes(("GOOGLE".toLowerCase()))) // false

// Check if the string includes the substring at the specified index
const str4 = "Hello world, welcome to the universe";
console.log(str4.includes("world", 5)) // true
console.log(str4.includes("world", 8)) // false

// Paddign 
// Padding is used to add specific characters to the start or end of a string to make it of a specific length
const anotherString = 'Hello World';
const paddingStart = anotherString.padStart(20, '*')
const paddingStart1 = anotherString.padStart(20, 'hihihi')
console.log(paddingStart, paddingStart.length, anotherString.length, paddingStart1.length)

// Padding end
const paddingEnd = anotherString.padEnd(20, '*')
const paddingEnd1 = anotherString.padEnd(20, 'hihihi')
console.log(paddingEnd, paddingEnd.length, anotherString.length, paddingEnd1.length)

// Slice  and substring 

// Slice will return a new string by extracting a section of an existing string
// Slice will not change the original string
// The first position is 0, the second is 1, ...


const phoneNumber = '1234567890'
// Slice takes two arguments start index and end index
const slicedPhoneNumber = phoneNumber.slice(0, 5)
// If you don't pass the end index, it will return the rest of the string
const slicedPhoneNumber2 = phoneNumber.slice(5)
console.log(slicedPhoneNumber)
console.log(slicedPhoneNumber2)
const hiddenPhoneNumber = slicedPhoneNumber2.padStart(phoneNumber.length, '*')
console.log(hiddenPhoneNumber)

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// The substring() method extracts characters from start to end (exclusive).
// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

const str5 = "Hello World"
const substring1 = str5.substring(0, 5)
const substring2 = str5.substring(5)
console.log(substring1)
console.log(substring2)

const str6 = "Hello World"
const substring3 = str6.substring(4, 1) // 1, 4
console.log(substring3)


// The substr() method extracts a part of a string.
// The substr() method begins at a specified position, and returns a specified number of characters.
// The substr() method does not change the original string.

const str7 = "Hello World"
const substr1 = str7.substr(0, 5) // 0 is the start index and 5 is the number of characters to extract
console.log(substr1)

const substr2 = str7.substr(5) // 5 is the start index and it will return the rest of the string
console.log(substr2)


