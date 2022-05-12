import React from "react";

function UserPost({login, userPost}) {

  const postCommunity = userPost.community.community_name
  
  console.log(userPost)
  return (
    <div>
      <p>{userPost.content}</p>
      <h5>Posted in: {postCommunity}</h5>
      <button>Edit</button>
    </div>
  );
}

export default UserPost;