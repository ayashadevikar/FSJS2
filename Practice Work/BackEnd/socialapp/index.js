// console.log("Hello World First Express App");
// Bring
const express = require("express")

// Assign
const app = express();

// Port
const PORT = 3000

// Route
app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/fb', (req, res)=>{
    res.status(200).send("Hello")
})

app.get("/insta", (req, res)=>{
    const insta = {
        userName: Alex,
        follow: 1,
        follower: 20,
    };
    res.status(200).json({insta})
})

// Listen
app.listen(PORT, ()=>{
    console.log("Server Running");
});