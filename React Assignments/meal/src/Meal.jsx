import React from "react"

function Meal({text}){
   return (

       <>
        
        <div>
           <ul>
                 {text.map((t) => (
                     <li key={t}>{t}</li>
                 ))}
           </ul>
         <h1>{text.strMeal}</h1>
         <img src={text.strMealThumb} alt="" />

         </div>
       </>
   )
}

export default Meal