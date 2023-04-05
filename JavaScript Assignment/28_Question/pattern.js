//28. Write a program to print the given patterns using the loops-
	//a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//	 *
//   **
//   ***
	
//	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//     ***
//	   ***
//	   ***

//	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//	     *
//	    ***
// 	   *****


//a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output

for( i=1; i<=3; i++ ){
	
		console.log("* ".repeat(i));
	
}

//	b. Print a square pattern, if the input is 3 then the output should be similar to the given output

let n = 3; 
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) {
    string += "*";
  }
  
  string += "\n";
}

console.log(string);



//	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output

let m = 3;
let string1 = "";

for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


// output

// n = 3
// * 
// * * 
// * * * 

// n = 3
// ***
// ***
// ***

// n = 3
//   *
//  ***
// *****



