import React from "react"

function Movie({text}){
   return (

       <>
          <h1>{text.Title}</h1>
          <img src={text.Poster} alt="" />
       </>
   )
}

export default Movie