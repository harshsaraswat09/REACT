import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Nav">
      <NavLink 
      to="/"
      style={({isactive})=> ({
        color: isactive ? "red" : "white"
      })}
      >
        Home</NavLink>
      <NavLink 
      to="/about"
      style={({isactive})=> ({
        color: isactive ? "red" : "white"
      })}
      >
        About</NavLink>
      <NavLink 
      to="/courses"
      style={({isactive})=> ({
        color: isactive ? "red" : "white"
      })}
      >
        Courses</NavLink>
    </div>
  );
};

export default Navbar;
