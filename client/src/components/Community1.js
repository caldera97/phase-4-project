import React, {useState, useEffect} from "react";
import FilteredPosts from "./FilteredPosts";

function Community1({login}) {
  const [filteredList, setFilteredList] = useState([]);
  useEffect(filterTheList, [])


  function filterTheList() {
      fetch("http://localhost:3000/communities/1")
      .then(r => r.json())
      .then(posts => setFilteredList(posts))
  }


  const renderPosts = filteredList.map((post) => (<FilteredPosts key={post.id} post={post} login={login}/>
  ));

  return (
    <div className="communities">
      {renderPosts}
    </div>
  );
}

export default Community1; 