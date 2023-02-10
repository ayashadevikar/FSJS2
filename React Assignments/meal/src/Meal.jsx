import React from "react"

function Meal({text}){
   return (

       <>
        
        <div>

       
        
            
        
         <h1>{text.strMeal}</h1>
         <img src={text.strMealThumb} alt="" />

         </div>
       </>
   )
}

export default Meal