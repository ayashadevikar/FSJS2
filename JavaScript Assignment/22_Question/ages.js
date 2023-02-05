//22. The following is an array of 10 students ages:
   // => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
   // - Sort the array and find the min and max age
    //- Find the median age(one middle item or two middle items divided by two)
   // - Find the average age(all items divided by number of items) 
    //- Find the range of the ages(max minus min)
    //- Compare the value of (min - average) and (max - average), use abs() method

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    console.log(ages.sort());  //[19, 19, 20, 22, 24,24, 24, 25, 25, 26]

    console.log(Math.min(19, 19, 20, 22, 24,24, 24, 25, 25, 26));  //19

    console.log(Math.max(19, 19, 20, 22, 24, 24, 24, 25, 25, 26));   //26

    console.log("To find the Median of the given list "+ages+" as per the condition we need to divide the middle number by 2");
    console.log("First sorting the list: "+ages.sort());
   const middleNumber= ages[(ages.length/2)];
    console.log("Getting the middle number: "+middleNumber);
    console.log("Dividing it by 2 to find the median: "+middleNumber/2) 
    
    let sum=0;
    for (let i = 0; i < ages.length; i++) {
      // take every item in the array and add it to sum variable
      sum =sum + ages[i]; 
    }
    console.log("average age " + sum);
    console.log("----------------------------------------------");

let range=(Math.max(...ages)-Math.min(...ages));
    console.log("The range of the ages is: "+range);

    minValue = Math.min(...ages);
   console.log("Min value is: " + minValue);
   maxValue = Math.max(...ages);
   console.log("Max value is: " +maxValue);

   average = Math.abs(minValue - maxValue);
   console.log("Average value is: " +average);

   // output

  //  [
  //   19, 19, 20, 22, 24,
  //   24, 24, 25, 25, 26
  // ]
  // 19
  // 26
  // To find the Median of the given list 19,19,20,22,24,24,24,25,25,26 as per the condition we need to divide the middle number by 2
  // First sorting the list: 19,19,20,22,24,24,24,25,25,26
  // Getting the middle number: 24
  // Dividing it by 2 to find the median: 12
  // average age 228
  // ----------------------------------------------
  // The range of the ages is: 7
  // Min value is: 19
  // Max value is: 26
  // Average value is: 7


  
