import React, {useState, useEffect} from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import User from "./User";
import Communities from "./Communities";
import PostForm from "./PostForm";
import AllPosts from "./AllPosts";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  const [communityFilter, setCommunityFilter] = useState(1);
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState(null)
  const [allPosts, setAllPosts] = useState([])

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
    <Router>
      <Navbar communityFilter={communityFilter} setCommunityFilter={setCommunityFilter}/>
      <Home setLogin={setLogin} login={login}/>
      <User />
      <Route path="/home" exact>
        <AllPosts allPosts={allPosts} login={login}/>
      </Route>
      {/* <Communities communityFilter={communityFilter} posts={posts} setPosts={setPosts} login={login}/> */}
      <PostForm />
    </Router>
  );
}

export default App;