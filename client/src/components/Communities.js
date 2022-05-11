import React, {useState, useEffect} from "react";
import Posts from "./Posts"

function Communities({communityFilter, posts, setPosts}) {

  const [comments, setComments] = useState([]);

  function fetchComments() {
    fetch ('http://localhost:3000/comments')
    .then(resp => resp.json())
    .then(commentData => setComments(commentData))
}

useEffect(fetchComments, []);
  
const renderPosts = posts
  .map((post) => (<Posts key={post.id} post={post} comments={comments} setComments={setComments}/>
));

  return (
    <div id="communities">
      {renderPosts}
    </div>
  );
}

export default Communities; 