//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let education = ['youtube', 'pw skills', 'udemy', 'ineuron', 'w3 schools', 'pw skills'];
// let index = education.lastIndexOf('pw skills', 4);
// console.log(index);
console.log(education.lastIndexOf('pw skills', 4)); // This searches for the last occurrence of 'pw skills' in the array, 
//starting from index 4 and going toward the beginning of the array. The method returns the index of the last occurrence of 
//'pw skills' before index 4, which is 1.

console.log(education.lastIndexOf('pw skills'));

// output

// 1
// 5