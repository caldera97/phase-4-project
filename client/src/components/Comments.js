import React from "react";
import CommentForm from "./CommentForm"

function Comments({post, comment}) {  
  
  return (
    <div>
      <p id='comment-content'>{comment.content}</p>
      <CommentForm />
    </div>
  );
}

export default Comments;