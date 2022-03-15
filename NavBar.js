import React from "react";
import SearchForm from "./SearchForm";

// props are passed to the SearchForm
//  * visibility -> the visibility of the SearchForm
//  * setParentSearchCriteria
function NavBar (props) {
  return (
    <div class="topnav sticky">
      <a class="nav-link active" href="/">Home</a>
      <a class="nav-link" href="/search">Search</a>
      <div class="topnav-right my-2 mr-4">
        <SearchForm visibility={props.visibility} setParentSearchCriteria={props.setParentSearchCriteria}></SearchForm>   
      </div>
    </div>
  )
}

export default NavBar;
