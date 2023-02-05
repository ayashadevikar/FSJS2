//27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).



let isPrime = true;
 
console.log("Prime numbers from 1 to 100 are: ");
 
for(let i=2; i <= 100; i++){
  for(let j=2; j < i - 1; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log(i);
  }
  isPrime = true;
}

// output

// Prime numbers from 1 to 100 are: 
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// 47
// 53
// 59
// 61
// 67
// 71
// 73
// 79
// 83
// 89
// 97
