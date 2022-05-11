import React, {useState, useEffect} from "react";
import Comments from "./Comments"

function Posts({post, comments}) {
  const [style, setStyle] = useState("false")

  const toggleComments = () => {
    console.log("you just clicked");
    setStyle(!style);
  }
  
  const renderComments = comments
    .filter((comment) => comment.post.id === post.id)
    .map((comment) => (<Comments key={comment.id} post={post} comment={comment}/>
  ));
  
  return (
    <div id="posts">
      <p id='post-content'>{post.content}</p>
      <button id="comments-button" onClick={toggleComments}>Comments</button>
      <div className={style ? "comments-off" : "comments-on"}>
      {renderComments}
      </div>
    </div>
  );
}

export default Posts; 