// indexOf is a method that returns the index of the first occurrence of a value in an array
// It returns the index of the first element that matches the condition
// If no element matches the condition, it returns -1 

const teamMembers = [
	{name: 'John', age: 30, city: 'New York', nationality: 'American'},
	{name: 'Jane', age: 25, city: 'Los Angeles', nationality: 'American'},
	{name: 'Jim', age: 35, city: 'Chicago', nationality: 'American'},
]

const team = teamMembers.find((teamMember) => {
	return teamMember.name === 'Jane'
})

console.table(team)

const indexOfJane = teamMembers.indexOf(team)
console.log(indexOfJane)

const firstPart = teamMembers.slice(0, indexOfJane)
const secondPart = teamMembers.slice(indexOfJane)

console.table(firstPart)
console.table(secondPart)