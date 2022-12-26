import { useState } from 'react'

import './App.css'



function AddTask(){
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");

  const onAddTask = () => {
      setTask([...task, text])
      setText("")
  }

const onDeleteTask = (id) =>{
      const updatedItems = task.filter((elem, index) => {
           return index === id;
      }) 

      setTask(updatedItems);
}

  return(
      <div>
           

           <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
           <button onClick={onAddTask}>Add</button>
           <button onClick={onAddTask}>Edit</button>
           <button onClick={() => onDeleteTask(index)}>Delete</button>


           <ul>
               {task.map((elem, index) => (
                   <li key={index}>{elem}</li>
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
