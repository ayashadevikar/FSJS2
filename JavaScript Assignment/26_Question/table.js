//26. Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
	//If the number given by the user is 2 then the output should look like this-
	//2 * 1 = 2
	//2 * 2 = 4
	//2 * 3 = 6 and so on till 2 * 10 = 20.

	let number = 5;

	for(i=1; i<=10; i++)
	{
		console.log(`${number} * ${i}= ${number*i}`);
		
	}

// output

// number = 5;
// 5 * 1= 5
// 5 * 2= 10
// 5 * 3= 15
// 5 * 4= 20
// 5 * 5= 25
// 5 * 6= 30
// 5 * 7= 35
// 5 * 8= 40
// 5 * 9= 45
// 5 * 10= 50