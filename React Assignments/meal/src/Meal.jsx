import React from "react"

function Meal({text}){
   return (

       <>
        
        
         <h1>{text.strMeal}</h1>
         <img src={text.strMealThumb} alt="" />
         <h1>chicken</h1>
       </>
   )
}

export default Meal