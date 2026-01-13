import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Kodr from "./pages/kodr";
import Kodex from "./pages/kodex";
const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}>
          <Route path='/courses/kodr' element={<Kodr/>}/>
          <Route path='/courses/kodex' element={<Kodex/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
