const cart = new Map([]);

const shoe = {
    id: 0, 
    name: 'shoe',
    price: 1000,
}


const shirt = {
    id: 1, 
    name: 'shirt',
    price: 600,
}

const tie = {
    id: 2, 
    name: 'tie',
    price: 300,
}

const mobile = {
    id: 3, 
    name: 'mobile',
    price: 30000,
}


const addToCart = item => {
    if (cart.has(item.id)){
        const selectedOrder = cart.get(item.id)
        selectedOrder.quantity++;
    } else {
        cart.set(item.id, { ...item, quantity: 1 })
    }
}

const deleteCartItem = (item) => {
    const cartItem = cart.get(item.id);
    if (cartItem){
        if (cartItem.quantity > 1){
            cartItem.quantity--;
        }  else {
            cart.delete(item.id)
        }
    }
}

addToCart(shoe)
console.log(cart, cart.size)

addToCart(shoe)
console.log(cart, cart.size)

addToCart(shoe)
console.log(cart, cart.size)

addToCart(tie)
console.log(cart, cart.size)

addToCart(shirt)
console.log(cart, cart.size)

cart.forEach ((vale, key) => {
    console.log(`Key - ${key}`)
    console.log(vale )
})

console.log("Shirt in car" , cart.get(shirt.id).quantity)
console.log("Shoe in car" , cart.get(shoe.id).quantity)
console.log("Tie in car" , cart.get(tie.id).quantity)


deleteCartItem(mobile)
deleteCartItem(shoe)
deleteCartItem(tie)

console.log(cart, cart.size)

