import React, {useState, useEffect} from "react";
import Posts from "./Posts"

function AllPosts({login, allPosts, setTheCommunity}) {
    const renderPosts = allPosts.map((post) => (
    <Posts key={post.id} post={post} login={login}/>));

  
  return (<>
    <div id="latestPosts">Latest Posts:</div>
    <div className="communities">
      {renderPosts}
    </div>
  </>);
}

export default AllPosts;