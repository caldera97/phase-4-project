import React, {useState, useEffect} from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import User from "./User";
import Community1 from "./Community1";
import Community2 from "./Community2";
import Community3 from "./Community3";
import Community4 from "./Community4";
import PostForm from "./PostForm";
import AllPosts from "./AllPosts";
import {Routes,Route} from "react-router-dom";

function App() {
  const [communityFilter, setCommunityFilter] = useState(1);
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState({about: null})
  const [allPosts, setAllPosts] = useState([])
  const [postEditing, setPostEditing] = useState(false)

  function setTheCommunity (community) {
    setCommunityFilter(community)
  }

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
        <Route exact path="/profile" element={<User login={login} setLogin={setLogin} postEditing={postEditing} setPostEditing={setPostEditing}/>}/>
        <Route exact path="/" element={<AllPosts allPosts={allPosts} login={login}/>}/>        
        <Route path="/community/1" element={<Community1 login={login}/>}/>
        <Route path="/community/2" element={<Community2 login={login}/>}/>
        <Route path="/community/3" element={<Community3 login={login}/>}/>
        <Route path="/community/4" element={<Community4 login={login}/>}/>
        <Route exact path="/new_post" element={<PostForm login={login} posts={posts} setPosts={setPosts}/>}/>
      </Routes>
    </div>
  );
}

export default App;