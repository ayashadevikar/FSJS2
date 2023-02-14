import React from "react"

function Movie({text}){
   return (

       <>
          <h1>{text}</h1>
          <img src={text} alt="" />
       </>
   )
}

export default Movie