import React from "react";
import Posts from "./Posts"

function Communities({login, communityFilter, posts, setPosts}) {

  const renderPosts = posts
    .map((post) => (<Posts key={post.id} post={post} login={login}/>
  ));

  return (
    <div id="communities">
      {renderPosts}
    </div>
  );
}

export default Communities; 