import { useState } from 'react'


import './App.css'

function App() {

  const [userChoice, setuserChoice] = useState("Rock,Paper,Scissor")
  const [computerChoice, setcomputerChoice] = useState("Rock,Paper,Scissor")


  //  if(userChoice === computerChoice){
  //        alert("Game Draw")
  //        return;
  //  }

  const Choices = Math.floor(Math.random()*3)


  return (
     <>
        <h1>Rock Scissor Paper Game</h1>
        <button>Rock</button>
        <button>Scissor</button>
        <button>Paper</button>
        
      </>
  )
}

export default App
