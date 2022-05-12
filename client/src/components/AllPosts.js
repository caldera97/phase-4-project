import React, {useState, useEffect} from "react";
import Posts from "./Posts"

function AllPosts({login, allPosts}) {
    const renderPosts = allPosts.map((post) => (
    <Posts key={post.id} post={post} login={login}/>));

  
  return (
    <div id="communities">
      {renderPosts}
    </div>
  );
}

export default AllPosts;