import React, {useEffect, useState} from "react";
import Posts from "./Posts"

function Communities() {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    fetch ('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(postData => setPosts(postData))
}

useEffect(fetchPosts, []);

const renderPosts = posts.map((post) => (
  <Posts key={post.id} post={post}/>
));

  return (
    <div>
      {renderPosts}
    </div>
  );
}

export default Communities;