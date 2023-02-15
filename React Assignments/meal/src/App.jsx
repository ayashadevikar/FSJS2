import { useEffect,useState } from 'react'

import './App.css'
import Movie from './Meal.jsx'
import Axios from 'axios'

function App() {
  
    const [text, setText] = useState([]);
    const [search, setSearch] = useState("");

    const fetechMovies = async () => {
        
      if(search === ""){
        alert("Enter any Meal Name")
        return;
   }


        const {data} = await Axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        console.log("Response", data)

        const text = data
        setText(text)
    }

    useEffect( ()=> {
      fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
  }, [search])

  return (
     <>
       <h1>Movie App</h1>
       <input type="text" value={text} placeholder='Enter any Meal Name' onChange={(e) => setSearch(e.target.value)}/>
       <button onClick={fetechMovies}>Search</button>
       <Movie text={text}/>
     </>
  )
}

export default App

