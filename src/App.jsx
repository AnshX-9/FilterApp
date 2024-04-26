
import { useState } from 'react';
import './App.css'
import { Users } from './data'
import Tablee from './Tablee';

function App() {
  const [query, setQuery] = useState("");

   const keys = ["first_name", "last_name", "email"]

 

   const search = (data) => {
    return data.filter(
      (item) => 
        keys.some((key) => item[key].toLowerCase().includes(query))
    )
   }


  return (
    <div>
            <input type="text" placeholder='Search' 
            onChange={(e) => setQuery(e.target.value)}
            />
              <Tablee data={search(Users)} />
             
    </div>
  )
}

export default App
