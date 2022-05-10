import React from "react";
import LoginForm from "./LoginForm.js"
import CreateUserForm from "./CreateUserForm"

function Home() {
  
  return (
    <div>
      <LoginForm />
      <CreateUserForm />
    </div>
  );
}

export default Home;