import { useState } from 'react'

import './App.css'



function ToDoList(){
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");
 const [editbtn, setEditBtn] = useState(false);

 const [valueToBeReplaced, setvalueToBeReplaced] = useState("");

  // const [edit, setEdit] = useState("null")

  const onAddTask = (e) => {
    e.preventDefault();
    
    if(editbtn){

        // updatevalue(valueToBeReplaced);
        // setText("")
        // setEditBtn(false)

        

    }
    else{
      if(text === ""){
        alert("Enter Any Task")
        return;
   }
     setTask([...task, text])
     setText("")
    }
    
  }

  // const updatevalue = (valueSentByAddButton) => {
  //   debugger
  //   const indexValuetoreplace=task.indexOf(valueSentByAddButton);
  //   task.splice(indexValuetoreplace,1,text);
    
  // }

// const EditTask = (elementSentByHTML) => {
//   debugger
//   const valuetoFind=task.find(element => element === elementSentByHTML)
//       if(valuetoFind==elementSentByHTML)
//       {
//         setText(elementSentByHTML);
//         setvalueToBeReplaced(elementSentByHTML);
//       }
//      setEditBtn(true);
// }

const EditTask = (id) => {
        const editItem = task.find((elem) => {
          return elem === id
        }) 
              
        setText(editItem)
}


// const onDeleteTask = (elementSentByHTML) =>{
//   console.log(task)
//   const valuetoDelete=task.find(element => element === elementSentByHTML)
//   if(valuetoDelete==elementSentByHTML)
//   {
//     const indexD=task.indexOf(valuetoDelete)
//     task.splice(indexD,1)
    
//   }
// }

  return(
      <div>
           

           <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
           
            { 
            editbtn? <button onClick={onAddTask}>Update</button> : <button onClick={onAddTask}>Add</button>}
          
          
         
           
          


           <ul>
               {task.map((elem,index) => (
                  <div key={elem}>
                 
                       <li>{elem}</li>
                       

           

                       <button onClick={() => EditTask(elem)}>Edit</button>
                       
                       <button onClick={() => onDeleteTask(elem)}>Delete</button>
                      
                       </div>
               ))}
              

           </ul>

      </div>
  
  )


}

function App() {
 
  

  return (
    <>
       <h1>CRUD App</h1>
       <ToDoList />
       
    </>
  )
}

export default App
