import React, {useState} from "react";

function CreateUserForm({setLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  function handleSubmit(e) {
    e.preventDefault()
    password === passwordConfirm ? 
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password
    }),
    }).then(handleErrors)
    .then(r => r.json())
    .then(r => alert("you may now log in!"))
    .catch(error => alert(error) ) : alert("passwords must match!")
  } 
  
  return (
    <form onSubmit={handleSubmit} id="signupForm">
    <input
      type="text"
      value={username}
      placeholder="username"
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="text"
      value={password}
      placeholder="password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <input
      type="text"
      value={passwordConfirm}
      placeholder="confirm password"
      onChange={(e) => setPasswordConfirm(e.target.value)}
    />
    <button type="submit">Sign up!</button>
  </form>
  );
}

export default CreateUserForm;