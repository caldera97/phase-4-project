import React from "react";
import Comments from "./Comments"

function Posts({post, comments}) {

  
const renderComments = comments
  .filter((comment) => comment.post.id === post.id)
  .map((comment) => (<Comments key={comment.id} post={post} comment={comment}/>
));
  
  return (
    <div id="posts">
      <p id='post-content'>{post.content}</p>
      {renderComments}
    </div>
  );
}

export default Posts;