//17. Write a program which tells the number of days in a month.

let userEnteredMonth="March";
if(userEnteredMonth=="January" || userEnteredMonth=="March" || userEnteredMonth=="May" || userEnteredMonth=="July" || 
userEnteredMonth=="August" || userEnteredMonth=="October" || userEnteredMonth=="December")
{
     console.log("31 days");
}
else if(userEnteredMonth=="April" || userEnteredMonth=="June" || userEnteredMonth=="September" || userEnteredMonth=="November")
{
    console.log("30 days");
}
else if(userEnteredMonth=="February")
{
    console.log("28/29 days");
}

// output

// userEnteredMonth="March"
// 31 days
