import React, {useState} from "react";

function LoginForm({ setLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
        "password-confirmation": password
    }),
    }).then(handleErrors)
      .then((r) => r.json())
      .then((user) => setLogin(user))
      .catch(error => alert(error))
  }

  function logout() {
    fetch('/logout', { method: 'DELETE' })
    .then(setLogin({}))
  }


  return (<>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
    </>);
}

export default LoginForm;