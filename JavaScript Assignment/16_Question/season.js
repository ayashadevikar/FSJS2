//16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    //- September, October or November, the season is Autumn.
   // - December, January or February, the season is Winter.
   // - March, April or May, the season is Spring
    //- June, July or August, the season is Summer
    
let userEnteredMonth="March";
if(userEnteredMonth=="September" || userEnteredMonth=="October" || userEnteredMonth=="November" )
{
    console.log("season is autum");
}
else if(userEnteredMonth=="December" || userEnteredMonth=="January" || userEnteredMonth=="February")
{
    console.log("season is Winter"); 
}  
else if(userEnteredMonth=="March" || userEnteredMonth=="April" || userEnteredMonth=="May")
{
    console.log("season is Spring");
}
else if(userEnteredMonth=="June" || userEnteredMonth=="July" || userEnteredMonth==" August"){
    console.log("season is Summer");
}

// output
// userEnteredMonth="March";
// season is Spring