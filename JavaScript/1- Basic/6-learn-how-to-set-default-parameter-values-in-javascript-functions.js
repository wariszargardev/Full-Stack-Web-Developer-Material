const userInfo = (name, email, age= 30) =>{
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
userInfo('Waris', 'waris@gmail.com')
userInfo('Waris Zargar', 'waris@gmail.com',35);

// Default arguments evaluate at call time
// so each call gets its own copy of the default argument
// so every time we invoke/call the function, it will create a new copy of the default argument

const todo = (item, itemList=[]) => {
    itemList.push(item);
    return itemList;
}

console.log(todo('Learn JavaScript'));
console.log(todo('Learn React'));
console.log(todo('Learn NodeJS'));


const jsArray = todo('Learn JavaScript');
const reactArray = todo('Learn React');
const nodeJsArray = todo('Learn NodeJS');

// function are reference type so the default argument is shared between all calls 
// Reference variable is shared between all calls & store the same reference in memory 
// Which is called by value & store in heap memory
// This will print the same array three times because the default argument is evaluated at call time
// so each call gets its own copy of the default argument 
console.log(jsArray);
console.log(reactArray);
console.log(nodeJsArray);