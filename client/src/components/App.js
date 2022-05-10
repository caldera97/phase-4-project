import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import User from "./User";
import Communities from "./Communities";
import PostForm from "./PostForm";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <User />
      <Communities />
      <PostForm />
    </>
  );
}

export default App;