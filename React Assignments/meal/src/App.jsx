import { useEffect,useState } from 'react'

import './App.css'
import Meal from './Meal.jsx'
import Axios from 'axios'

function App() {
  
    const [text, setText] = useState([]);
    const [search, setSearch] = useState("");

    const fetechMeals = async () => {
        
      if(search === ""){
        alert("Enter any Meal Name")
        return;
   }


        const {data} = await Axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        console.log("Response", data)

        const text = data.meals
        setText(text)
    }

    useEffect( ()=> {
      fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }, [search])

  return (
     <>
       <h1>Meal App</h1>
       <input type="text" value={search} placeholder='Enter any Meal Name' onChange={(e) => setSearch(e.target.value)}/>
       <button onClick={fetechMeals}>Search</button>
       <Meal text={text}/>
     </>
  )
}

export default App

