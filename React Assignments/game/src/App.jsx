import { useState } from 'react'


import './App.css'

function App() {

  const [userChoice, setuserChoice] = useState("Rock,Paper,Scissor")
  const [computerChoice, setcomputerChoice] = useState("Rock,Paper,Scissor")


  const condition = () => {
      if(userChoice === computerChoice){
        const Choices = Math.floor(Math.random()*3)
         alert("Game Draw")
         return;
     }
  }
  

  


  return (
     <>
        <h1>Rock Scissor Paper Game</h1>
        <button onClick={condition}>Rock</button>
        <button onClick={condition}>Scissor</button>
        <button onClick={condition}>Paper</button>
        
      </>
  )
}

export default App
