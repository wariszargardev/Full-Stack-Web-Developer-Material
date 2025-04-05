// Array

const myArray = [1, 2, 3, 4, 5]
// JS arrays are resizable we can add different data types in array 
// Array elements cannot be accessed using strings like array['abc'] we can access based on index
// Array use Shallow copy means it will share reference if change in an array all variable will be effected
// Deep copy reference will not share


const stringArray = ["Waris", "Ali", "Awais"]

const anotherWay = new Array(1,2,3,4,5)

// Push will add element at last index
myArray.push(6)
myArray.push(7,8,9,10)

// pop will return last array value 
myArray.pop()

// unshift will add element at first position
// It will shift all the value which is cost effective 
// let suppose we have 10000 it will change position of all elements 
myArray.unshift(11)

// shift will remove first element
myArray.shift()
console.table(myArray)


// We can check if certian value is exist in array or not 
// It will return boolean
console.log(`9 is exists in array or not ${myArray.includes(9)}`)
console.log(`25 is exists in array or not ${myArray.includes(25)}`)
console.log(`idex of 5 is ${myArray.indexOf(5)}`)
// If not found return -1
console.log(`idex of 25 is ${myArray.indexOf(25)}`) 




const anotherArray = [11,12,13,14,15,16]
const concatArray = myArray.concat(anotherArray)
const concatArray1 = [...myArray, ...anotherArray]

console.table(concatArray)
console.table(concatArray1)

// Array to  string conversion
const finalString = concatArray.join(" ")
console.log(finalString, typeof finalString)


const newArray = ["waris", "ali", 'ahsan', 'faisal', 'mushtaq']

console.log (`A- original array ${newArray}`)
// Slice 
// will return section of array  
// last is not included in result 
const sliceArray = newArray.slice(1,3)
console.log (`Slice array ${sliceArray}`)

// This will print rest of elements 
const sliceArray2 = newArray.slice(1)
console.log (`Slice array 2 ${sliceArray2}`)

console.log (`B- original array after slice ${newArray}`)


// splice

// will return section of array and it can be positive value 
// last is included in result 
// It will remove specific portion of element from array and will effect original array

const spliceArray = newArray.splice(1,3)
console.log (`Splice array ${sliceArray}`)

console.log (`C- original array after splice ${newArray}`)