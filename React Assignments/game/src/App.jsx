import { useState } from 'react'


import './App.css'

function App() {

  const [userChoice, setuserChoice] = useState("")
  const [computerChoice, setcomputerChoice] = useState("Rock,Paper,Scissor")


  const condition = (value) => {
    userChoice = value //jo value waha se bhejegi
    const computerChoice = Math.floor(Math.random()*3)

      if(userChoice=="Rock" && computerChoice=="Scissor")
      {
        //apan jeetege
      }
      else if(userChoice=="Paper" && computerChoice=="Rock")
      {
        //apan jeetege
      }
      else if(userChoice=="Scissor" && computerChoice=="Paper")
      {
        //apan jeetege
      }
      else if(userChoice==computerChoice)
      {
        //Draw
      }
      else
      {
        //Computer Jeet gaya
      }


      

     }
  
  

  


  return (
     <>
        <h1>Rock Scissor Paper Game</h1>
        <button onClick={() => condition("Rock")}>Rock</button>
        <button onClick={() => condition("Scissor")}>Scissor</button>
        <button onClick={() => condition("Paper")}>Paper</button>
        
      </>
  )
}

export default App
