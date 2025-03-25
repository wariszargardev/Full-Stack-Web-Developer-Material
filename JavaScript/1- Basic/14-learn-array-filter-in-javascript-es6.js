// filter is used to filter an array based on a condition
// It will return a new array

const products = [
	{name: 'laptop', price: 1000, stock: 10},
	{name: 'mouse', price: 100, stock: 20},
	{name: 'keyboard', price: 25, stock: 0},
	{name: 'monitor', price: 200, stock: 40},
    {name: 'mousepad', price: 35, stock: 0},
    {name: 'speaker', price: 50, stock: 0},
]

// filter products with stock > 0
const availableProducts = products.filter((product) => {
	return product.stock > 0
})
console.table(availableProducts)

// filter products with stock === 0
const notAvailableProducts = products.filter((product) => {
	return product.stock === 0
})
console.table(notAvailableProducts)

// filter products with stock === 0 and price > 25
const stockZeroWithPriceMoreThan25 = products.filter((product) => {
	return product.stock === 0 && product.price > 25
})
console.table(stockZeroWithPriceMoreThan25)

// filter products with stock > 0 and price < 25
const stockMoreThanZeroWithPriceLessThan25 = products.filter((product) => {
	return product.stock > 0 && product.price < 25
})
console.table(stockMoreThanZeroWithPriceLessThan25)

// filter products with stock > 0 and price > 25
const stockMoreThanZeroWithPriceMoreThan25 = products.filter((product) => {
	return product.stock > 0 && product.price > 25
})
console.table(stockMoreThanZeroWithPriceMoreThan25)

// filter products with stock > 0 and price > 25 and name contains 'mouse'
const stockMoreThanZeroWithPriceMoreThan25AndNameContainsMouse = products.filter((product) => {
	return product.stock > 0 && product.price > 25 && product.name.includes('mouse')
})
console.table(stockMoreThanZeroWithPriceMoreThan25AndNameContainsMouse)
