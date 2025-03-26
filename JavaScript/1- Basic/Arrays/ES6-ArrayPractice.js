const users = [
	{
		name: "Waris",
		age: 30,
		score: 75
	},
	{
		name: "Waris 1",
		age: 25,
		score: 15
	},
	
	{
		name: "Waris 2",
		age: 12,
		score: 36
	},
	
	{
		name: "Waris 3",
		age: 65,
		score: 98
	},
]

for (user of users) {
	console.log(user)
}

users.forEach((user) => {
	console.log(user)
})


const scores = users.map ((user) => {
	return user.score
})

console.table(scores)

const singleUser = users.find(user => user.name === 'Waris 2')
console.log (singleUser)

const userIndex = users.indexOf(singleUser)
console.log(userIndex)


const sumScore = users.reduce ((acc, value) => {
	return acc + value.score
}, 0)
console.log(sumScore)


const warisFilter = users.filter(user => user.age == 25)
console.log(warisFilter)