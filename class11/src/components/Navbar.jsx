import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-pink-700 px-6 py-4 justify-between flex mb-10">
        <h2>Navbar</h2>
        <div className="flex gap-5">
          <Link to='/'>Home Page</Link>
          <Link to='/about'>About Page</Link>
          <Link to='/product'>Product Page</Link>
        </div>
      </div>
  )
}

export default Navbar
