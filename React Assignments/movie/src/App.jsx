

import './App.css'
import Movie from './Movie.jsx'
import Axios from 'axios'

function App() {
  
    const [text, setText] = useState([]);
    const [search, setSearch] = useState("");

    const fetechMovies = async () => {
        
      if(search === ""){
        alert("Enter any Movie Name")
        return;
   }


        const {data} = await Axios.get(`https://www.omdbapi.com/?s=${search}&apikey=f195b326`)
        console.log("Response", data)

        const text = data
        setText(text)
    }

    useEffect( ()=> {
      fetch(`https://www.omdbapi.com/?s=${search}&apikey=f195b326`)
  }, [search])

  return (
     <>
       <h1>Movie App</h1>
       <input type="text" value={text} placeholder='Enter any Movie Name' onChange={(e) => setSearch(e.target.value)}/>
       <button onClick={fetechMovies}>Search</button>
       <Movie text={text}/>
     </>
  )
}

export default App





