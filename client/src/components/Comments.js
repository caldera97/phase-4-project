import React from "react";

function Comments({post, comment}) { 
  
  return (
    <div>
      <p id='comment-content'>{comment.content}</p>
      <p id='comment-author'>- {comment.user.username}</p>
    </div>
  );
}

export default Comments;