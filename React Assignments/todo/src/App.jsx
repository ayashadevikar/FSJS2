import { useState } from 'react'

import './App.css'



function AddTask(){
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");
  // const [editbtn, setEditBtn] = useState(false);
  const [edit, setEdit] = useState("null")

  const onAddTask = () => {
    if(text === ""){
         alert("Enter Any Task")
         return;
    }
      setTask([...task, text])
      setText("")
  }

const EditTask = (id) => {
      const editItems = task.find((elem) => {
           return elem.id === id
        
      })
           
      console.log(editItems);
      setEdit(text);
}


const onDeleteTask = (id) =>{
      const removedItems = task.filter((elem, index) => {
                  
        return index !== id;
        
      }) 

      setTask(removedItems);
}

  return(
      <div>
           

           <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
           
            <button onClick={onAddTask}>Add</button>
          
          
         
           
          


           <ul>
               {task.map((elem,index) => (
                  <div key={index}>
                 
                       <li>{elem}</li>
                       

           

                       <button onClick={() => EditTask(index)}>Edit</button>
                       
                       <button onClick={() => onDeleteTask(index)}>Delete</button>
                      
                       </div>
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
