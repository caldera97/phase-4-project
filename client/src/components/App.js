import React, {useState, useEffect} from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import User from "./User";
import Communities from "./Communities";
import AllPosts from "./AllPosts";
import PostForm from "./PostForm";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  const [communityFilter, setCommunityFilter] = useState(1);
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState(null)
  const [allPosts, setAllPosts] = useState([])
  const [postEditing, setPostEditing] = useState(false)

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

  useEffect(() => {
    fetch("/posts").then(r => r.json())
    .then(posts => setAllPosts(posts)) }, []
  );

  useEffect(fetchPosts, [communityFilter]);

  return (
    <div>
      <Navbar login={login} setLogin={setLogin} communityFilter={communityFilter} setCommunityFilter={setCommunityFilter}/>
      <Home setLogin={setLogin} login={login}/>
      <Routes>
        <Route exact path="/profile" element={<User login={login} postEditing={postEditing} setPostEditing={setPostEditing}/>}/>
        <Route exact path="/" element={<AllPosts allPosts={allPosts} login={login}/>}/>        
        <Route path="/community" element={<Communities setCommunityFilter={setCommunityFilter} posts={posts} setPosts={setPosts} login={login}/>} />
        <Route exact path="/new_post" element={<PostForm login={login} posts={posts} setPosts={setPosts}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;