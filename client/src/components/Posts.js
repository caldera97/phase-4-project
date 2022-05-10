import React, {useState, useEffect} from "react";
import Comments from "./Comments"

function Posts() {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    fetch ('http://localhost:4000/posts')
    .then(resp => resp.json())
    .then(postData => setPosts(postData))
}

useEffect(fetchPosts, []);
  
  return (
    <div>


      <Comments />
    </div>
  );
}

export default Posts;