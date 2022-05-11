import React from "react";
import CommentForm from "./CommentForm"

function Comments({post, comment}) {  

  return (
    <div>
      <p id='comment-content'>{comment.content}</p>
      <p id='comment-author'>- {comment.user.id}</p>
      <CommentForm />
    </div>
  );
}

export default Comments;