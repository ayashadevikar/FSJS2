// console.log("Hello World First Express App");
// Bring
const express = require("express")

// Assign
const app = express();

// Port
const PORT = 3000

// Route
// app.get('/', (req, res)=>{
//     res.send('Hello World')
// })

// Listen
app.listen(PORT, ()=>{
    console.log("Server Running");
});