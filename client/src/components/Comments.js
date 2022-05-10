import React, {useState, useEffect} from "react";
import CommentForm from "./CommentForm"

function Comments({post}) {  
  
  return (
    <div>
      <h5>{post.comments}</h5>
      <CommentForm />
    </div>
  );
}

export default Comments;