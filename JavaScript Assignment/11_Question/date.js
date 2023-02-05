//11. Use the Date object to do the following activities
   // - What is the year today?
    //- What is the month today as a number?
    //- What is the date today?
    //- What is the day today as a number?
    //- What is the hours now?
    //- What is the minutes now?
    //- Find out the numbers of seconds elapsed from January 1, 1970 to now. ye karte abhi

const now = new Date();
// console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

let past = new Date('1970-01-01'); //setting past date

let todaysdate= new Date(); //setting todays date

let timeelapsed=(past-todaysdate) 

console.log("Time Elapsed" +timeelapsed); 

// output

// 2023
// 1
// 0
// 19
// 34
// 56
// Time Elapsed-1675605896474