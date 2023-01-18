import { useState } from 'react'


import './App.css'

function App() {

  const [userChoice, setuserChoice] = useState("Rock,Paper,Scissor")
  const [computerChoice, setcomputerChoice] = useState("Rock,Paper,Scissor")


  const condition = () => {
      if(userChoice === computerChoice){
         alert("Game Draw")
         return;
     }
  }
  

  const Choices = Math.floor(Math.random()*3)


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
