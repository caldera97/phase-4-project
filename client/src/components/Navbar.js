import React from "react";
import {Link} from 'react-router-dom'
function Navbar({setCommunityFilter, login, setLogin}) {

  function logout() {
    fetch('/logout', { method: 'DELETE' })
    .then(setLogin(null))
  }
  
  return (
    <div id="navbar">
      <div id="nav-buttons">
        <button><Link to="/">Home</Link></button>
      </div>
      <div id="main-heading">
      <h1 id="title">Really Cool Project Name</h1>
      </div>
      <div id="user-buttons">
        <span className={login ? "show-on" : "show-off"}>
          <p id='username'>Welcome, {login ? login.username : null}</p>
          <button className="navbutton"><Link to="/profile">My Profile</Link></button>
          <button className={login ? "show-on" : "show-off"} onClick={logout}><Link to="/">Logout</Link></button>
        </span>
      </div>
    </div>
  );
}

export default Navbar;