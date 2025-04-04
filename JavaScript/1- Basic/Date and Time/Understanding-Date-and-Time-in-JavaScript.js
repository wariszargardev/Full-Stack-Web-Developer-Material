// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#retrieving-the-date-with-get

// Use new Date() when you need a Date object with methods like getMonth(), getYear() etc
// const dateObject = new Date(); 

// Use Date.now() when you just need the timestamp in milliseconds
// const timestamp = Date.now();

// When we passing in string 04 means april month
const dateToCheck = "2030-04-10"
const futureDateObject = new Date(dateToCheck)
console.log(futureDateObject)

const futureDateInMiliSeond = futureDateObject.getTime()
console.log(futureDateInMiliSeond)

const currentDateInMiliSeond = Date.now()
console.log(`Date to Check ${dateToCheck} in Miliseconds ${futureDateInMiliSeond} and current date in miliseconds ${currentDateInMiliSeond}`)
console.log(`Date to check is  ${futureDateInMiliSeond > currentDateInMiliSeond ? "Future Date" : "Past Date"} `)

const converMiliSecondsToDate = new Date(futureDateInMiliSeond);
console.log(converMiliSecondsToDate, converMiliSecondsToDate.getDate(), converMiliSecondsToDate.getMonth())

if (converMiliSecondsToDate.getDate() == 10 && converMiliSecondsToDate.getMonth() == 3) {
    console.log("Yes today is 10th of April")
} else {
    console.log("No today is not 10th of April")
}

// 2 is march month
const birthday = new Date(1996, 2, 13); 
console.log(birthday, birthday.getMonth(), birthday.getDate())
// The date shows as March 12 because JavaScript uses UTC timezone
// When creating a date with year/month/day parameters, it uses local timezone
// But when displayed, it converts to UTC, which can shift the date backwards
// depending on your timezone offset from UTC

birthday.setFullYear(1995)
console.log(birthday.getFullYear())


// Print local and UTC timezones
const now = new Date();
// This will print the local time
console.log(now.getHours());
// This will print the UTC time
console.log(now.getUTCHours());

// Print local and UTC timezones
const now1 = new Date();
// This will print the local time
console.log(now.getHours());
console.log("UTC Time", now1.getUTCFullYear(), now1.getUTCMonth(), now1.getUTCDate(), now1.getUTCHours(), now1.getUTCMinutes(), now1.getUTCSeconds(), now1.getUTCMilliseconds())
console.log("Local Time", now1.getFullYear(), now1.getMonth(), now1.getDate(), now1.getHours(), now1.getMinutes(), now1.getSeconds(), now1.getMilliseconds())

// UTC stands for Coordinated Universal Time

