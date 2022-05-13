import React from "react";
// import SearchBar from "./SearchBar"
import {Link} from 'react-router-dom'
function Navbar({setCommunityFilter, login}) {

  function filterPosts(e) {
    setCommunityFilter(parseInt(e.target.value))
  }
  
  return (
    <div id="navbar">
      <div id="nav-buttons">
        <button><Link to="/">Home</Link></button>
        <select onChange={filterPosts} id="select-community">
          <option value='1'>Community 1</option>
          <option value='2'>Community 2</option>
          <option value='3'>Community 3</option>
          <option value='4'>Community 4</option>
        </select>
      </div>
      <div id="main-heading">
      <h1 id="title">Really Cool Project Name</h1>
      </div>
      <div id="user-buttons">
        <span className={login ? "show-on" : "show-off"}>
          <p id='username'>👤 {login ? login.username : null}</p>
          <button className="navbutton"><Link to="/profile">My Profile</Link></button>
        </span>
      </div>
      {/* <SearchBar /> */}
    </div>
  );
}

export default Navbar;