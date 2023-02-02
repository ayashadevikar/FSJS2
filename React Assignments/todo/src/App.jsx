import { useState } from 'react'

import './App.css'


function DeleteTask(){

  
}

function AddTask(){
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");

  const onAddTask = () => {
      setTask([...task, text])
      setText("")
  }

  return(
      <div>
           

           <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
           <button onClick={onAddTask}>Add</button>
           <button onClick={onAddTask}>Edit</button>
           <button onClick={onAddTask}>Delete</button>


           <ul>
               {task.map((a) => (
                   <li key={a}>{a}</li>
               ))}

           </ul>

      </div>
  
  )


}

function App() {
 
  

  return (
    <>
       <h1>CURD App</h1>
       <AddTask />
    </>
  )
}

export default App
