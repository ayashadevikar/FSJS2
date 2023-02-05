//09. Boolean value is either true or false.
    //- Write three JavaScript statement example which provide truthy value.
   // - Write three JavaScript statement example which provide falsy value.

//Falsy value

if(0) {
    console.log("if block executed");
} else {
    console.log("else block executed");
}

if(null) {
    console.log("if block executed");
} else {
    console.log("else block executed");
}

if(NaN) {
    console.log("if block executed");
} else {
    console.log("else block executed");
}


//Truthy values

if(true) {
    console.log("if block executed");
} else {
    console.log("else block executed");
}

if({}) {
    console.log("if block executed");
} else {
    console.log("else block executed");
}

if(Infinity) {
    console.log("if block executed");
} else {
    console.log("else block executed");
}

// output

// else block executed
// else block executed
// else block executed

// if block executed
// if block executed
// if block executed
