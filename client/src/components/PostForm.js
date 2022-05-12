import React from "react";

function PostForm({login, posts, setPosts}) {

  function handlePostSubmit(e) {
    e.preventDefault();
    if (login.id === undefined) {
      alert("You must be logged in to make a post!")
    } else {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "content": e.target.elements['post-input'].value,
        "user_id": login.id,
        "community_id": e.target.elements['new-post-community'].value
      }),
    })
      .then(resp => resp.json())
      .then(newPost => setPosts((prevState) => [...prevState, newPost]));
  }
    e.target.reset();
}
  
  return (
    <div id='post-form'>
      <form onSubmit={handlePostSubmit}>
        <textarea max-length='400' className='post-form-input' id='post-input' placeholder='Share your thoughts'></textarea>
        <div id='post-buttons'>
          <p id='select-community-text'>Select Community to post in:</p>
          <select className='post-form-input' id="new-post-community">
            <option value='1'>Community 1</option>
            <option value='2'>Community 2</option>
            <option value='3'>Community 3</option>
            <option value='4'>Community 4</option>
          </select>
          <button className='post-form-input' type='submit' id='submit-post'>Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;