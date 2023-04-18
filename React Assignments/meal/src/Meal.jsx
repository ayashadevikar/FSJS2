import React from "react"

function Meal({meals}){
     
      

   return (

      
         <div>
              
            
       {meals.map((meal) => (
            <div key={meal.idMeal}>
                  <h1>{meal.strMeal}</h1>
                  <img src={meal.strMealThumb} alt="" />
            </div>
      ))}
               </div>
          
         
        
        
      
   )
}

export default Meal