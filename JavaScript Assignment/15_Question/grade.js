//15. Write a program which can give grades to students according to theirs scores:
    //- 80-100, A
    //- 70-89, B
    //- 60-69, C
    //- 50-59, D
    //- 0-49, F

let userMarks=65;
if(userMarks >=80 && userMarks<=100){
    console.log("grade A");
} 
else if(userMarks >=70 && userMarks<=89){
    console.log("grade B");
} 
else if(userMarks >=60 && userMarks<=69){
    console.log("grade C");
}
 else if(userMarks >=50 && userMarks<=59){
    console.log("grade D");
}
else if(userMarks >=0 && userMarks<=49){
    console.log("grade F");
} 

// output

// userMarks= 65;
// grade C