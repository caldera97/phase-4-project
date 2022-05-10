import React from "react";
import LoginForm from "./LoginForm.js"
import CreateUserForm from "./CreateUserForm"

function Home() {
  
  return (
    <div id='home'>
      <button>Login</button>
      <button>Sign Up</button>
      {/* <LoginForm id='login-form' />
      <CreateUserForm id='create-user-form' /> */}
    </div>
  );
}

export default Home;