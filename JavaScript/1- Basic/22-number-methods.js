console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.5)); // false
console.log(Number.isInteger(20.5)); // false

console.log(Number.isSafeInteger(20)); // true
console.log(Number.isSafeInteger(20.5)); // false
console.log(Number.isSafeInteger(20.5)); // false

// isFinite method is used to check if a number is finite it's means it's not infinite
// Safer method is to user Number.isFinite(value) instead of isFinite(value)
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(20.5)); // false
console.log(Number.isFinite(20.5)); // false

console.log(isNaN("0")); // false
console.log(isNaN(0)); // false

console.log(`Number.isNaN(20)`, isNaN(20)); // false
console.log(`Number.isNaN(20.5)`, isNaN(20.5)); // false
console.log(`Number.isNaN('20')`, isNaN('20')); // false
console.log(`Number.isNaN('waris')`, isNaN('waris')); // true
console.log(`Number.isNaN(444)`, Number.isNaN(444));

console.log(Number.parseFloat('20.5'));
console.log(Number.parseFloat('20.5'));

console.log(Number.parseInt('20.5'));
console.log(Number.parseInt('20.5'));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.5));
console.log(Number.isInteger(20.5));


// trunc method is used to remove the decimal part of a number
console.log(Math.trunc(20.5));
console.log(Math.trunc(20.2222));
console.log(Math.trunc(20.222225));



