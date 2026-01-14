import React, {useState} from "react";

const Navbar = (props) => {

const [newTheme, setnewTheme] = useState('')


    
  return (
    <div className="nav">
       <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newTheme)
        }}
      >
        <input
          onChange={(e) => {
            setnewTheme(e.target.value);
          }}
          type="text"
          placeholder="Enter Theme"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
