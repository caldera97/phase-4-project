import React, {useState} from "react";

function LoginForm({ setLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


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
    })
      .then((r) => r.json())
      .then((user) => setLogin(user));
  }

  function logout() {
    fetch('/logout', { method: 'DELETE' })
    .then(setLogin(null))
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
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
    <button onClick={logout}>Logout</button>
    </>);
}

export default LoginForm;