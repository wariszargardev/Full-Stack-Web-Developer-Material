// https://bugfender.com/blog/javascript-date-and-time/

// Represents the current date and time according to the user's local timezone
const currentDate = new Date(); 
console.log(currentDate, currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())


// Omitted seconds and milliseconds
console.log(new Date(2023, 8, 10, 23, 15)); // Sun Sep 10 2023 23:15:00

// Omitted hour, minute, seconds and milliseconds
console.log(new Date(2023, 8, 10)); // Sun Sep 10 2023 00:00:00

// Passed only Year and Month
console.log(new Date(2023, 8)); // Fri Sep 01 2023 00:00:00

// Attention Please!!!
console.log(new Date(2023)); // Thu Jan 01 1970 05:30:02


// Parsing string to a JavaScript Date
const dateString = "2023-09-10T23:15:00";
const date = new Date(dateString);
console.log(date);

// Discouraged to use a non-standardized format as
// an input to the new Date() contructor to create a Date object.
console.log(new Date("December 12, 2022 13:24:00"));

const dateInMiliseconds = date.getTime();
console.log(dateInMiliseconds);

// Using Timestamps
const date1 = new Date(dateInMiliseconds);
console.log(date1); // Fri Jul 07 2023 19:08:20 GMT+0530 (India Standard Time)


// Current date using JavaScript Date Methods
const currentDate1 = new Date();
console.log(currentDate1);

// Get the current year
console.log(currentDate1.getFullYear());

// Get the current month
// The month index starts from 0
console.log(currentDate1.getMonth() + 1);

// Get the current day
console.log(currentDate1.getDate());

// Get the current hour
console.log(currentDate1.getHours());

// Get the current minute
console.log(currentDate1.getMinutes());

// Months (0-11):
// This is largely a historical design decision inherited from the C programming language's struct tm
// January is month 0, February is 1, ..., December is 11
// This can be confusing for developers, which is why many developers add +1 when displaying months
// That's why you often see code like in your example: currentDate1.getMonth() + 1

// Dates (1-31):
// This follows the natural calendar system where days start from 1
// It would be unintuitive to have days start from 0 since there's no "0th day" in any month
// This matches how we naturally think about and use dates in real life

let day = currentDate1.getDate();
let month = currentDate1.getMonth() + 1;
let year = currentDate1.getFullYear();

console.log(`${day}/${month}/${year}`);
console.log(`${day}-${month}-${year}`);
console.log(`${year}-${month}-${day}`);

// Single digit month and day are padded with a leading zero
day = (String(currentDate1.getDate()).padStart(2, "0"));
month = (String(currentDate1.getMonth() + 1).padStart(2, "0"));
year = currentDate1.getFullYear();
console.log(`${day}/${month}/${year}`);


// Will print 1st 10 string
console.log(new Date().toJSON().slice(0, 10))

let localTime = new Date().toLocaleDateString();
console.log(localTime); // "11/09/2023"

localTime = new Date().toLocaleDateString("de-DE");
console.log(localTime); // "11/09/2023"


// How to calculate elapsed time using the JavaScript Date Object
// Define two Date objects representing the start and end dates
const startDate = new Date('2023-08-15T00:00:00');
const endDate = Date.now(); // Current date and time in milliseconds

// Calculate the time difference in milliseconds
const timeDifferenceMS = endDate - startDate;

// Calculate the elapsed time in seconds, minutes, hours, and days

const timeDifferenceSecs = Math.floor(timeDifferenceMS / 1000);
const timeDifferenceMins = Math.floor(timeDifferenceMS / 60000);
const timeDifferenceHours = Math.floor(timeDifferenceMS / 3600000);
const timeDifferenceDays = Math.floor(timeDifferenceMS / 86400000);

console.log(`Time difference in milliseconds: ${timeDifferenceMS}`);
console.log(`Time difference in seconds: ${timeDifferenceSecs}`);
console.log(`Time difference in minutes: ${timeDifferenceMins}`);
console.log(`Time difference in hours: ${timeDifferenceHours}`);
console.log(`Time difference in days: ${timeDifferenceDays}`);


const utcDateTime = new Date(Date.UTC(2023, 9, 17, 13, 1, 0));

// Format the date with the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(utcDateTime));

const prefillDate = new Date(Date.UTC(2013, 9, 17, 13, 10, 20));

console.log("In en-US: ", new Intl.DateTimeFormat("en-US").format(prefillDate));

console.log("In en-GB: ", new Intl.DateTimeFormat("en-GB").format(prefillDate));

console.log("In ko-KR: ", new Intl.DateTimeFormat("ko-KR").format(prefillDate));


// Another way tolocal date string method
const myDOB = new Date("13-March-1996")
console.log(myDOB.toLocaleDateString())
console.log(`in en us my dob ${myDOB.toLocaleDateString("en-GB")}`)

const customDateFormate = myDOB.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
})
console.log(customDateFormate)
const dateFormatObject = {
    year: "numeric",
    month: "long",
    day: "numeric",
}
console.log(myDOB.toLocaleDateString("default", dateFormatObject))
// day: 'numeric' or '2-digit'
// weekday: 'narrow', 'short', or 'long'
// year: 'numeric' or '2-digit'
// month: 'numeric', '2-digit', 'narrow', 'short', or 'long'
// hour: 'numeric' or '2-digit'
// minute: 'numeric' or '2-digit'
// second: 'numeric' or '2-digit'



