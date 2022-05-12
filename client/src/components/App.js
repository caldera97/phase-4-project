import React, {useState, useEffect} from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import User from "./User";
import Communities from "./Communities";
import PostForm from "./PostForm";

function App() {
  const [communityFilter, setCommunityFilter] = useState(1);
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState({})

  function fetchPosts() {
    fetch (`http://localhost:3000/communities/${communityFilter}`)
    .then(resp => resp.json())
    .then(postData => setPosts(postData))
  }

  useEffect(fetchPosts, [communityFilter]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setLogin(user));
      }
    });
  }, []);

  return (
    <>
      <Navbar communityFilter={communityFilter} setCommunityFilter={setCommunityFilter}/>
      <Home setLogin={setLogin} login={login}/>
      <User />
      <Communities communityFilter={communityFilter} posts={posts} setPosts={setPosts} login={login}/>
      <PostForm posts={posts} setPosts={setPosts} login={login}/>
    </>
  );
}

export default App;