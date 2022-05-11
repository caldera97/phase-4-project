import React from "react";
// import SearchBar from "./SearchBar"

function User({setCommunityFilter}) {

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
      <button className="navbutton">My Posts</button>
      {/* <SearchBar /> */}
    </div>
  );
}

export default User;