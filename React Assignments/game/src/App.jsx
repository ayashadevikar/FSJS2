import { useState } from 'react'


import './App.css'

function App() {

  // let userChoice=""

  const [userChoice, setUserChoice] = useState("") 
  const [computerChoiceArray, setComputerChoice] = useState(["Rock" , "Paper" , "Scissor"])


  const condition = (value) => {
  debugger
  const userChoice = value;
  //  const userChoice = ["Rock", "Paper", "Scissor"]; 
  
    // const computerChoice = (userChoice[Math.floor(Math.random() * 3)]);
   
  // tUserChoic  see("userChoice");
  
  
  
  const randomIndex=Math.floor(Math.random() * computerChoiceArray.length)
  const computerChoice=computerChoiceArray[randomIndex];
  

      if(userChoice === "Rock" && computerChoice === "Scissor")
      {
        
        alert(`"You Won!! Computer Chose ${computerChoice}`);
      }
      else if(userChoice === "Paper" && computerChoice === "Rock")
      {
        alert(`"You Won!! Computer Chose ${computerChoice}`);
      }
      else if(userChoice === "Scissor" && computerChoice === "Paper")
      {
        alert(`"You Won!! Computer Chose ${computerChoice}`);
      }
      else if(userChoice === computerChoice)
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
