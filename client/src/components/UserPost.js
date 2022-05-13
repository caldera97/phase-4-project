import React, { useState } from "react";

function UserPost({login, userPost, fetchUserPosts, handleDelete, postEditing, setPostEditing}) {
  

  const postCommunity = userPost.community.community_name

  function handleDelete(e) {
    fetch(`http://localhost:3000/posts/${userPost.id}`, {
      method: "DELETE"      
    })
    fetchUserPosts();
  }
  
  function togglePostEditing(e) {
    setPostEditing(true);
  }

  function updatePost(e) {
    e.preventDefault();
    console.log(e.target)
    fetch(`http://localhost:3000/posts/${userPost.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userPost.id,
        content: e.target.elements['edit-post-input'].value
      }),
    })
    .then((resp) => resp.json())
    .then((updatedPost) => console.log(updatedPost));
    fetchUserPosts();
    setPostEditing(false);
  }

  return (
    <>
    <div id='ind-user-posts'>      
      {!postEditing ? 
      <div>
      <p>{userPost.content}</p>
      <h5>Posted in: {postCommunity}</h5>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={togglePostEditing}>Edit Post</button>
      </div>
       : (<form onSubmit={updatePost} id='submit-post-edit'>
        <textarea max-length='400' id='edit-post-input' placeholder={userPost.content} defaultValue={userPost.content} />
        <input type='submit' value='Save' id='submit-post-edit'/>
      </form>)
      }    
    </div>
    </>
  );
}

export default UserPost;