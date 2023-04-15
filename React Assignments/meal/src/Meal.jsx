import React from "react"

function Meal({text}){
   return (

       <>
        
        
         <h1>{text.strMeal}</h1>
         <img src={text.strMealThumb} alt="" />
 
       </>
   )
}

export default Meal