//21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
//If it does not exist add to the countries list.

let countries = ["INDIA", "RUSSIA", "AMERICA", "CANADA", "LONDON","ETHOPIA"];
if(countries.includes("ETHOPIA")) {
      console.log("Its present in the list.");
} else {
  countries.push("ETHOPIA");
  console.log("Now added to list."+countries);
}

// output

// Its present in the list.