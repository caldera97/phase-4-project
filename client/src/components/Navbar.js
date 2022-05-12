import React from "react";
// import SearchBar from "./SearchBar"

function Navbar({setCommunityFilter, login}) {

  function filterPosts(e) {
    setCommunityFilter(parseInt(e.target.value))
  }
  
  return (
    <div id="navbar">
      <select onChange={filterPosts} id="select-community">
        <option value='1'>Community 1</option>
        <option value='2'>Community 2</option>
        <option value='3'>Community 3</option>
        <option value='4'>Community 4</option>
      </select>
      <h1 id="title">Really Cool Project Name</h1>
      <span>
        <p id='username'>👤 {login ? login.username : null}</p>
        <button className="navbutton">My Profile</button>
      </span>
      {/* <SearchBar /> */}
    </div>
  );
}

export default Navbar;