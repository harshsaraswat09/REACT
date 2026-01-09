import { useEffect, useState } from 'react'
import axios from "axios";
import User from './components/User';

const App = () => {
  const [allData, setallData] = useState([])
    const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    setallData(res.data)
  }

  useEffect(function(){
    getData()
  },[])


  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div className='all-cards'>
        {allData.map(function(elem,idx){

        return <div key={idx}>
          <User elem={elem}/>
        </div>
      })}
      </div>
    </div>
  )
}

export default App
