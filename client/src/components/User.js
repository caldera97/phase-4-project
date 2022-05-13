import React, {useState, useEffect} from "react";
import UserPost from "./UserPost";

function User({login, postEditing, setPostEditing}) {
  const [userPosts, setUserPosts] = useState([])
  const [userAbout, setUserAbout] = useState({})
  const [editing, setEditing] = useState(false)

  function fetchUserPosts() {
    fetch(`http://localhost:3000/users/${login.id}/posts`)
    .then(response => response.json())
    .then(userPosts => setUserPosts(userPosts));
  }

  useEffect(() => fetchUserPosts, [login])

  function updateAbout(e) {
    e.preventDefault();
    setEditing(false);
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
    .then(newAbout => console.log(newAbout))
    e.target.reset();
  }

  function toggleEdit() {
    setEditing(true)
  }
  
  const renderUserPosts = userPosts
    .map((userPost) => (<UserPost key={userPost.id} userPost={userPost} login={login} fetchUserPosts={fetchUserPosts} postEditing={postEditing} setPostEditing={setPostEditing}/>));
  
  return (
    <div id='user-info'>
      <div id='user-top'>
        <div id='user-and-edit-button'>
          <h1>Hello, {login ? login.username : null}!</h1>
          <button onClick={toggleEdit} id='edit-about-button' className={login.about ? "show-on" : "show-off"}>Edit About</button>
        </div>
        <div id='about-me'>
          <h2>About me:</h2>
          {login.about ? <h3>{login.about}</h3> : null}
          {!login.about || editing ? <form id='submit-about' onSubmit={updateAbout} className={login.about ? "show-off" : "show-on"} >
            <textarea max-length='400' id='edit-about-input' placeholder='Tell us about yourself!' defaultValue={login.about} />
            <button type='submit' id='submit-about'>Save</button>
          </form> : null}
        </div>
      </div>      
      <div id="user-posts">
        <h2>Posts by me:</h2>
        {renderUserPosts}
      </div>
    </div>
  );
}

export default User;