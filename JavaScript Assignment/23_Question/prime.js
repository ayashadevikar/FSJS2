//23. Write a program to check that the number given by the user is a prime number or not.

// 5 
// 5*1=5
// 1*5 =5

// 6
// 1*6
// 6*1
// 2*3
// 3*2


let number=6;
let flag=0;

for(i=0;i<=number;i++)
{
    if(number%i==0)
    flag++;
}

if(flag==2){

    console.log("Prime number");
}
else{
    console.log("no prime number");
}

// output

// number = 6;
// no prime number



