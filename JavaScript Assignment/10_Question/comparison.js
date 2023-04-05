//10. Figure out the result of the following comparison expression first without using console.log(). Itna ho gaya
// After you decide the result confirm it using console.log()
    //- 4 > 3 //true
    console.log( 4 > 3); //4 is greater than 3 which is true. 
    
    //- 4 >= 3 //true
    console.log( 4 >= 3); //4 is greater than equal to 3 which is true. [Returns true if the left operand is greater than or equal to the right operand.]

    //- 4 < 3  //false
    console.log( 4 < 3); 

    //- 4 <= 3  //flase
    console.log( 4 <= 3); 

    //- 4 == 4  //true
    console.log( 4 == 4); 

    //- 4 === 4 //false
    console.log( 4 === 4);  

    //- 4 != 4  //false
    console.log( 4 != 4); 
    //- 4 !== 4 //false
    console.log( 4 !== 4); 

    //- 4 != '4' //false
    console.log( 4 != '4');

    //- 4 == '4' //true
    console.log( 4 == '4');

    //- 4 === '4' //false
    console.log( 4 === '4');

    //- Find the length of python and jargon and make a falsy comparison statement.


    const python = "python";
    console.log(python.length);

    const jargon = "jargon";
    console.log(jargon.length)

    if (python.length === jargon.length+1) {
        console.log(`Both ${python} & ${jargon} has same lenght i.e ${python.length}`); 
    }
    else{
        console.log("Nooooooooooo");
    }

// output

// true
// true
// false
// false
// true
// true
// false
// false
// false
// true
// false
// 6
// 6
// Nooooooooooo