import React from "react";
import LoginForm from "./LoginForm.js"
import CreateUserForm from "./CreateUserForm"
import {Link} from 'react-router-dom'

function Home({setLogin, login}) {
  
  return (
    <div id='home'>
      {login ? <button><Link to="/new_post">Create New Post</Link></button> : <>
      <LoginForm id='login-form' setLogin={setLogin}/>
      <CreateUserForm id='create-user-form' setLogin={setLogin}/>
      </>}
    </div>
  );
}

export default Home;