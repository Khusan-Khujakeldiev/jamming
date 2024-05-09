import React from "react";
import "./SearchResults.scss";
import Track from "../Track/Track";
function SearchResults(props) {
  return (
    <div className="SearchResult">
      <h1 className="h1">Result</h1>
      {props.track_list.map((track) => (
        <Track track_list={track} key={track.id}></Track>
      ))}
    </div>
  );
}

export default SearchResults;
