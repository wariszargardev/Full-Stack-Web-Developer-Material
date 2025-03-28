// Two new data structures in ES6 are Sets and Maps

// Sets are a collection of unique values 
// Maps are a collection of key-value pairs

// Both Sets and Maps are non-primitive data structures that store data in the Heap memory
// This means they are passed by reference, not by value
// When you assign a Set or Map to another variable, both variables point to the same memory location

// Sets methods

// has method in set used to check if a value exists in the set 
// add method in set used to add a new value to the set 	
// entries method in set used to return an iterator of set entries	
// values method in set used to return an iterator of set values
// foreach method in set used to execute a function for each set element
// clear method in set used to remove all elements from the set
// delete method in set used to remove a specific element from the set
// size property in set used to return the number of elements in the set

const score = new Set([32,12,25,36,98,39,25]);
console.table(score)
score.add(38)
console.table(score)

console.log(`Set has specific value or not ${score.has(25)}`)
console.log(`Set has specific value or not ${score.has(100)}`)

console.table(`Set size ${score.size}`)

for (const item of score.entries()){
	console.log(item)
}

score.delete(98)
console.table(score)

score.clear()
console.table(score)


const fruits = new Set(['apple','mango','banana']);
for (const fruit of fruits.values()){
	console.log(fruit)
}

fruits.forEach (fruit => console.log(fruit))


const numbers = [1,2,4,1,6,8,2,5,9,2,0,9,7,6,3,4,6,7,8,4,2,1,5,8,9,0,2,4,5,3,2,6,8,9,6];

const numbers1 = new Set(numbers);
console.log(numbers1);



// Map

// has method in map used to check if a key exists in the map
// set method in map used to add a new key-value pair to the map
// entries method in map used to return an iterator of map entries
// values method in map used to return an iterator of map values
// foreach method in map used to execute a function for each map element
// clear method in map used to remove all elements from the map
// delete method in map used to remove a specific element from the map
// Keys method in map used to return an iterator of map keys
// size property in map used to return the number of elements in the map

const player = new Map([['key','value'],['lawal','kamal']]);
console.table(player)
player.set('waris', 'zargar')
console.table(player)

console.log(`Map has specific value or not ${player.has("waris")}`)
console.log(`Map has specific value or not ${player.has("kamal")}`)

for (const play of player.values()){
	console.log(`Value ${play}`)
}

for (const play of player.keys()){
	console.log(`Key ${play}`)
}

player.forEach ((value, key) => {
	console.log(`Key ${value} - Value ${key}`)
})

console.log(player.size)

player.delete("waris")
console.table(player)
player.clear()
console.table(player)


// Map & Object
// Maps are iterables and objects are not
const simpleMap = new Map([
	['name', 'kamal'],
	['age', 20],
	['city', 'delhi'],
	['country', 'india']
])
simpleMap.set('number', 1234567890)
console.table(simpleMap)

const simpleObject = {
	name: 'kamal',
	age: 20,
	city: 'delhi',
	country: 'india'
}
simpleObject['number'] = 1234567890
console.table(simpleObject)

// set is a collection of unique values
const countries = ['india','pakistan','afghanistan','nepal','bhutan', 'india', 'pakistan'];
const memberCountries = new Set(countries);
console.log(memberCountries, typeof memberCountries)
const backToArray = Array.from(memberCountries);
console.log(backToArray, typeof backToArray)

const uniqueCountries = [...new Set(countries)];
console.log(uniqueCountries, typeof uniqueCountries)



const vipMembers = [
	{
		name: 'kamal',
		age: 20,
		country: 'pakistan'
	},
	{
		name: 'waris',
		age: 20,
		country: 'pakistan'

	},
	{
		name: 'zargar',
		age: 20,
		country: 'canada'

	},
	{
		name: 'zargar',
		age: 20,
		country: 'usa'
	},
]


const contriesName= vipMembers.map (member => member.country)

const uniqueCountries1 = [... new Set(contriesName)];

console.log(`Unique country name ${uniqueCountries1.length}`)