import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams} from "react-router-dom";
import FilteredPosts from "./FilteredPosts"

function Communities({login, setCommunityFilter, posts, setPosts}) {
  const [filteredList, setFilteredList] = useState(posts);
  const { id } = useParams();

  useEffect(filterTheList, [])


  function filterTheList() {
    let theList = posts.filter(post => post.community.id === parseInt({ id }))
    setFilteredList(theList)
  }


  const renderPosts = filteredList.map((post) => (<FilteredPosts key={post.id} post={post} login={login}/>
  ));

  return (
    <div className="communities">
      {renderPosts}
    </div>
  );
}

export default Communities; 