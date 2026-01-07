import React from 'react'
import { useState } from 'react'

const App = () => {

  const [username, setusername] = useState('')
  const [email, setemail] = useState([])

  const [alluser, setalluser] = useState([])
 
  const handlesubmit = (e) => {
    e.preventDefault()
    
    const oldUsers = [...alluser]
    oldUsers.push({username,email})

    setalluser(oldUsers)
    
    setemail('')
    setusername('')
  }



  return (
    <div>
      <form onSubmit={(e)=>{
        handlesubmit(e)
      }}>
        <input 
          type="text" placeholder='Enter your name' 
          value={username}
          onChange={(e)=>{
            setusername(e.target.value)
          }}
        />

        <input 
          type="text" placeholder='Enter your email' 
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }}
        />

        <button>Submit</button>
      </form>

      {alluser.map((e,idx)=>{

        return <div key={idx}>
          <h1>{e.username}</h1>
          <p>{e.email}</p>
        </div>
      })}
    </div>
  )
}

export default App
