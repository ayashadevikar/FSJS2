//18. Write a program which tells the number of days in a month, now consider leap year.

let userEnteredMonth = "February";
if (userEnteredMonth == "January" || userEnteredMonth == "March" || userEnteredMonth == "May" || userEnteredMonth == "July" ||
    userEnteredMonth == "August" || userEnteredMonth == "October" || userEnteredMonth == "December") 
{
    console.log("31 days");
}
else if (userEnteredMonth == "April" || userEnteredMonth == "June" || userEnteredMonth == "September" || userEnteredMonth == "November") 
{
    console.log("30 days");
}
else if (userEnteredMonth == "February") 
{
    let isLeapyear = new Date().getFullYear();
    if (isLeapyear % 4 == 0) {
        console.log("It is leap year, hence 29 days");
    } else {
        console.log("It is not a leap year, hence 28 days");
    }
}


// output

// userEnteredMonth = "February"
// It is not a leap year, hence 28 days
