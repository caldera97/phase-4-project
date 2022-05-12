import React from "react";
import LoginForm from "./LoginForm.js"
import CreateUserForm from "./CreateUserForm"

function Home({setLogin, login}) {
  function logout() {
    fetch('/logout', { method: 'DELETE' })
    .then(setLogin(null))
  }
  
  return (
    <div id='home'>
      {login ? <button onClick={logout}>Logout</button> : <>
      <LoginForm id='login-form' setLogin={setLogin}/>
      <CreateUserForm id='create-user-form' setLogin={setLogin}/>
      </>}

    </div>
  );
}

export default Home;