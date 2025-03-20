## Primitive Data Types (Stack Memory, Passed by Value)

Primitive data types store their values directly in the stack, a memory region optimized for fast access.
When you pass a primitive variable to a function or assign it to another variable, a copy of the value is created.
This means changes to the copied value do not affect the original.

**Characteristics:**

* **Memory:** Stored in the Stack.
* **Passing:** Passed by Value (a copy is created).
* **Immutability (generally):** Changes to a copy or original do not affect each other.

**Types:**

1.  `Number`
2.  `String`
3.  `Boolean`
4.  `Undefined`
5.  `Null`
6.  `Symbol`
7.  `BigInt`

**Example:**

```javascript
let userName1 = 'Muhammad Waris';
let userName2 = userName1; // userName2 gets a copy of userName1's value

userName1 = 'Waris Zaragr'; // Changing userName1 doesn't affect userName2
userName2 = 'Waris'; // Changing userName2 doesn't affect userName1

console.log(userName1); // Output: Waris Zaragr
console.log(userName2); // Output: Waris
```

## Non-Primitive Data Types (Heap Memory, Passed by Reference)

Non-primitive data types are stored in the heap, a memory region that is more flexible for dynamic memory allocation.

They are "passed by reference," meaning that when you assign a non-primitive variable to another variable, you're actually copying the *reference* (memory address) to the original data, not the data itself. This means both variables point to the same location in memory.

Therefore, if you modify the value of one variable, the change will be reflected in the other variable as well, because they both reference the same underlying data.

**Characteristics:**

* **Memory:** Stored in the Heap.
* **Passing:** Passed by Reference (shared memory address).
* **Mutability:** Changes to one variable affect all variables referencing the same data.

**Types:**

1.  `Object`
2.  `Array`
3.  `Function`


```javascript
let obj1 = { name: "Muhammad Waris" };
let obj2 = obj1; // obj2 now references the same object as obj1

obj2.name = "Waris Zargar"; // Modifying obj2 changes obj1

console.log(obj1.name); // Output: "Waris Zargar"
console.log(obj2.name); // Output: "Waris Zargar"