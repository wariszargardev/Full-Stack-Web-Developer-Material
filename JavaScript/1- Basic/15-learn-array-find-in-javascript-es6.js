// find
// find is used to find an element in an array based on a condition
// It will return the first element that matches the condition
// If no element matches the condition, it will return undefined

const products = [
	{name: 'laptop', price: 1000, stock: 10},
	{name: 'mouse', price: 100, stock: 20},
	{name: 'keyboard', price: 25, stock: 0},
	{name: 'monitor', price: 200, stock: 40},
    {name: 'mousepad', price: 35, stock: 0},
    {name: 'speaker', price: 50, stock: 0},
	{name: 'monitor', price: 300, stock: 10},
]

const monitorProduct = products.find((product) => {
	return product.name === 'monitor'
})
console.table(monitorProduct)


const teamMembers = [
	{name: 'John', age: 30, city: 'New York', nationality: 'American'},
	{name: 'Jane', age: 25, city: 'Los Angeles', nationality: 'American'},
	{name: 'Jim', age: 35, city: 'Chicago', nationality: 'American'},
	{name: 'John', age: 28, city: 'Boston', nationality: 'American'},
    {name: 'Juan', age: 30, city: 'Buenos Aires', nationality: 'Argentinian'},
    {name: 'Maria', age: 25, city: 'Santiago', nationality: 'Chilean'},
    {name: 'Pedro', age: 35, city: 'Sao Paulo', nationality: 'Brazilian'},
    {name: 'Ana', age: 30, city: 'Madrid', nationality: 'Spanish'},
    {name: 'Luis', age: 25, city: 'Barcelona', nationality: 'Spanish'},
    {name: 'Carlos', age: 35, city: 'Valencia', nationality: 'Spanish'},
    {name: 'Maria', age: 32, city: 'Seville', nationality: 'Spanish'},
    {name: 'Miguel', age: 30, city: 'Mexico City', nationality: 'Mexican'},
    {name: 'Laura', age: 25, city: 'Mexico City', nationality: 'Mexican'},
    {name: 'Diego', age: 35, city: 'Mexico City', nationality: 'Mexican'},
    {name: 'Luis', age: 29, city: 'Guadalajara', nationality: 'Mexican'},
    {name: 'Eva', age: 30, city: 'Paris', nationality: 'French'},
    {name: 'Lucas', age: 25, city: 'Paris', nationality: 'French'},
    {name: 'Hugo', age: 35, city: 'Paris', nationality: 'French'},
    {name: 'Eva', age: 27, city: 'Lyon', nationality: 'French'},
    {name: 'John', age: 40, city: 'London', nationality: 'British'},
]

const findTeamMemberByNationality = (nationality) => {
	return teamMembers.find((teamMember) => {
		return teamMember.nationality === nationality
	})
}

console.table(findTeamMemberByNationality('American'))
console.table(findTeamMemberByNationality('French'))

const findTeamMeberByNationalityAndName = (nationality, name) => {
    const filterByNationality = teamMembers.filter(team => team.nationality === nationality)
    return filterByNationality.find(nationality => nationality.name === name)
}
console.table(findTeamMeberByNationalityAndName("Spanish", "Carlos"))
console.table(findTeamMeberByNationalityAndName("American", "John"))
console.table(findTeamMeberByNationalityAndName("American", "wewJohn"))