import React, {useState, useEffect} from "react";
import UserPost from "./UserPost";

function User({login}) {
  const [userPosts, setUserPosts] = useState([])
  const [userAbout, setUserAbout] = useState({})

  // let placeHolder = login.about

  function fetchUserPosts() {
    fetch(`/users/${login.id}/posts`)
    .then(response => response.json())
    .then(userPosts => setUserPosts(userPosts));
  }

  useEffect(fetchUserPosts, [])

  function updateAbout(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/users/${login.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        about: e.target.elements['edit-about-input'].value,
        id: login.id
      }),
    })
    .then(resp => resp.json())
    .then(newAbout => setUserAbout(newAbout))
    e.target.reset();
  }
  
  const renderUserPosts = userPosts
    .map((userPost) => (<UserPost key={userPost.id} userPost={userPost} login={login}/>));
  
  return (
    <div id='user-info'>
      <h1>{login ? login.username : null}</h1>
      <h2>{login ? "About me:" : null}</h2>
      <h3>{login ? login.about : null}</h3>
      <button>Edit About</button>
      <form onSubmit={updateAbout} className={login ? "show-off" : "show-on"} >
        <textarea max-length='400' id='edit-about-input' placeholder='Tell us about yourself!'></textarea>
        <button type='submit' id='submit-about'>Save</button>
      </form>
      {renderUserPosts}
    </div>
  );
}

export default User;