import React, {useState, useEffect} from "react";
import Comments from "./Comments"
import {Link} from "react-router-dom"

function Posts({login, post}) {
  const [style, setStyle] = useState("false")
  const [comments, setComments] = useState([]);

  const toggleComments = () => {
    setStyle(!style);
  }

  function fetchComments() {
    fetch (`http://localhost:3000//posts/${post.id}/comments`)
    .then(resp => resp.json())
    .then(commentData => setComments(commentData))
}

  useEffect(fetchComments, []); 

  const renderComments = comments
    .map((comment) => (<Comments key={comment.id} post={post} comment={comment}/>
  ));

  function handleCommentSubmit(e) {
  e.preventDefault();
  if (login) {
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "content": e.target.elements['comment-input'].value,
        "user_id": login.id,
        "post_id": post.id
      }),
    })
      .then(resp => resp.json())
      .then(newComment => setComments((prevState) => [...prevState, newComment]));
  } else {
    alert("You must be logged in to leave a comment!")
  }
    e.target.reset();
  }

  return (
    <div id="posts">
      <Link to={`/community/${post.community.id}`}>{post.community.community_name}</Link>
      <p id='post-content'>{post.content}</p>
      <div id='post-bottom'>
        <p id='post-author'>by {post.user.username}</p>
        <button id="comments-button" onClick={toggleComments}>Show/Hide Comments ⇩</button>
        <p>{post.likes}</p>
      </div>
      <div className={style ? "show-off" : "show-on"}>
        {renderComments}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input name='comment-input' type='text' className={style ? "show-off" : "comment-field-show"} placeholder='Leave a comment!'/>
        <button type='submit' className={style ? "show-off" : "comment-button-show"}>Post</button>
      </form>
    </div>
  );
}
 
export default Posts; 