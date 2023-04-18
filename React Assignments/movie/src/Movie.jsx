import React from "react"

function Movie({search}){
   return (

      <div>
              
            
      {search.map((Search) => (
           <div key={Search.imdbID}>
                 <h1>{Search.Title}</h1>
                 <p>{Search.Year}</p>
                 <img src={Search.Poster} alt="" />
           </div>
     ))}
              </div>
         
        
       
       
   )
}

export default Movie