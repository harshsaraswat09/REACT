import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {


  const [theme, settheme] = useState('light')

  const changeTheme = (newTheme) => {
    settheme(newTheme)
  }

  return (
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar theme={theme} changeTheme={changeTheme} />
      
    </div>
  )
}

export default App
