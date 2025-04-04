let date1  = new Date();
// this is the current date and time
console.log(date1);
// Date have some methods to get the date and time
console.log(`Full year ${date1.getFullYear()}`); // 4 digits
console.log(`Month ${date1.getMonth()}`); // 0-11
console.log(`Date ${date1.getDate()}`); // 1-31
console.log(`Hours ${date1.getHours()}`); // 0-23
console.log(`Minutes ${date1.getMinutes()}`); // 0-59
console.log(`Seconds ${date1.getSeconds()}`); // 0-59
console.log(`Milliseconds ${date1.getMilliseconds()}`); // 0-999
console.log(`toString ${date1.toString()}`); // Share the date and time in a string format
console.log(`toDateString ${date1.toDateString()}`); // Share the date in a string format
console.log(`toLocaleString ${date1.toLocaleString()}`); // Share the date and time in a string format
console.log(`toLocaleDateString ${date1.toLocaleDateString()}`); // Share the date in a string format
console.log(`toLocaleTimeString ${date1.toLocaleTimeString()}`); // Share the time in a string format
console.log(`type of date1 ${typeof date1}`); // it is an object

// This will give the current date and time in milliseconds
// Which is the number of milliseconds since 1st jan 1970
// Whihc is easy for comparison
let date2 = Date.now();
console.log(date2);

// Manual way to create a date
let date3 = new Date(2025, 0, 1, 10, 30, 0); // year, month, day, hour, minute, second
console.log(date3);
console.log(date3.toLocaleString());

// Another way to create a date
let date4 = new Date("2025-01-01");

const dateString = "2025-01-01";
let date5 = new Date(dateString);
// getMonth is 0-11
const formattedDate = `${date5.getFullYear()}-${String(date5.getMonth() + 1).padStart(2, '0')}-${String(date5.getDate()).padStart(2, '0')}`;
console.log(formattedDate); // Will output: 2025-01-01


// Timestamps are the number of milliseconds since 1st jan 1970
let date6 = Date.now();
console.log(date6);
// date in seconds
let date7 = Date.now() / 1000;
console.log(Math.floor(date7));

// date in minutes
let date8 = Date.now() / 1000 / 60;
console.log(Math.floor(date8));

// date in hours
let date9 = Date.now() / 1000 / 60 / 60;
console.log(Math.floor(date9));

// date in days
let date10 = Date.now() / 1000 / 60 / 60 / 24;
console.log(Math.floor(date10));

// date in months
let date11 = Date.now() / 1000 / 60 / 60 / 24 / 30;
console.log(Math.floor(date11));


const date12 = new Date("2025-01-01");
const updateDate = date12.toLocaleDateString('default', {
   weekday: 'long',
   year: 'numeric',
   month: 'long',
   day: 'numeric',
   hour: 'numeric',
   minute: 'numeric',
   second: 'numeric',
   hour12: true
})
console.log(updateDate);
