import React from "react";
import SearchBar from "./SearchBar"

function User() {
  
  return (
    <div id="navbar">
      <select id="select-community">
        <option value='1'>Community 1</option>
        <option value='2'>Community 2</option>
      </select>
      <h1>Really Cool Project Name</h1>
      <button className="navbutton">My Posts</button>
      {/* <SearchBar /> */}
    </div>
  );
}

export default User;