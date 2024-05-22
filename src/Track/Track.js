import React from "react";
import "./Track.scss";

function Track(props) {
  const handleClick = () => {
    props.context === "SearchResults"
      ? props.addToPLayList(props.track_list)
      : props.deleteFromPLaylist(props.track_list.id);
  };
  return (
    <div className="track">
      <div>
        <h3>{props.track_list.name}</h3>
        <p>
          {props.track_list.artist}|{props.track_list.album}
        </p>
      </div>
      <div
        className="Track_add_butt"
        onClick={() => {
          handleClick();
        }}
      >
        {props.context === "SearchResults" && "+"}
        {props.context === "playlist" && "\u2212"}
      </div>
    </div>
  );
}

export default Track;
