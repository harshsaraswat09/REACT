import React, { Profiler } from 'react'
import Card from './components/Card'

const App = () => {

  const cardData = {
    username: 'Harsh',
    role: 'Engineer',
    email: 'hahah@gmail.com',
    Profile: 'https://i.pinimg.com/736x/d4/65/46/d4654642b306ff006029fb5732c66971.jpg'
  }


  return (
    <div>
      <Card cardData={cardData}/>
    </div>
  )
}

export default App
