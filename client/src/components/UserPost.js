import React from "react";

function UserPost({login, userPost}) {
  
  return (
    <div>
      <p>{userPost.content}</p>
      <button>Edit</button>
    </div>
  );
}

export default UserPost;