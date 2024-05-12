import React from "react";
import "./Playlist.scss";
import "../Tracklist/Tracklist.scss";
import TrackList from "../Tracklist/Tracklist";
function PlayList(props) {
  return (
    <div className="playlist">
      <h1>Playlist</h1>
      <div className="trackList">
        <TrackList
          context="playlist"
          deleteFromPLaylist={props.deleteFromPLaylist}
          track_list={props.track_list}
        ></TrackList>
      </div>
    </div>
  );
}

export default PlayList;
