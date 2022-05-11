import React from "react";
import LoginForm from "./LoginForm.js"
import CreateUserForm from "./CreateUserForm"

function Home({setLogin}) {
  
  return (
    <div id='home'>
      <button>Login</button>
      <button>Sign Up</button>
      <LoginForm id='login-form' setLogin={setLogin}/>
      <CreateUserForm id='create-user-form' setLogin={setLogin}/>
    </div>
  );
}

export default Home;