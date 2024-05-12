import React from "react";
import "./SearchResults.scss";
import "../Tracklist/Tracklist.scss";
import TrackList from "../Tracklist/Tracklist";
function SearchResults(props) {
  return (
    <div className="SearchResult">
      <h1 className="h1">Result</h1>
      <div className="trackList">
        <TrackList
          addToPLayList={props.addToPLayList}
          track_list={props.track_list}
          context="SearchResults"
        ></TrackList>
      </div>
    </div>
  );
}

export default SearchResults;
