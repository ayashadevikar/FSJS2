//30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let num1 = parseInt(prompt("enter first num"));
let num2 =  parseInt(prompt("enter second num"));
let operator = prompt("enter operator") ;
let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        window.alert(num1 + num2);
        break;

    case '-':
        result = num1 - num2;
        console.log(num1 - num2);
        break; 
        
    case '*':
        result = num1 * num2;
        console.log(num1 * num2);
        break;  
        
    case '/':
        result = num1 / num2;
        console.log(num1 / num2);
        break;
        
    default:
        console.log("Invalid Operator");
          break;   
}

// output

// enter first num: 10
// enter second num: 20
// enter operator: +
// result = 30

