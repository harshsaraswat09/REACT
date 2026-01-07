import React, { useState } from 'react'

const App = () => {

  const [marks, setmarks] = useState([85, 92, 78, 90, 88])

  function givegrace(){
    const newmarks = marks.map(function(elem){

      if (elem>95){
        return elem
      }else{
        return elem+5
      }
    })
    
    setmarks(newmarks)
  }

  return (
    <div>
      {marks.map(function(elem,idx){

        return <h1 key={idx}>Marks of students {idx+1} is {elem}</h1>
      })}

      <button onClick={givegrace}>Give them Grace</button>
    </div>
  )
}

export default App
