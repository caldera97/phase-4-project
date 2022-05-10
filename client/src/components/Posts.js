import React, {useState, useEffect} from "react";
import Comments from "./Comments"

function Posts({post}) {
  
  return (
    <div>
      <p>{post.content}</p>
      <Comments post={post}/>
    </div>
  );
}

export default Posts;