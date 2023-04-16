import { useEffect,useState } from 'react'
import './index.css'
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


        const {data} = await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        console.log("Response", data)

        const text = data.meals[0]
        setText(text)
    }


    useEffect( ()=> {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
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

