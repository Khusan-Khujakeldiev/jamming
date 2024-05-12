import React, { useState } from "react";
import "./Track.scss";

function Track(props) {
  const [deleted, setDeleted] = useState(false);
  const handleClick = () => {
    props.deleteFromPLaylist(props.track_list.id);
    setDeleted(true);
  };
  return (
    <div className={`track ${deleted ? "deleted" : ""}`}>
      <div>
        <h3>{props.track_list.Music_name}</h3>
        <p>
          {props.track_list.Language}|{props.track_list.Music_albom}
        </p>
      </div>
      <div
        className="Track_add_butt"
        onClick={() => {
          props.context === "SearchResults"
            ? props.addToPLayList(props.track_list)
            : handleClick();
        }}
      >
        {props.context === "SearchResults" && "+"}
        {props.context === "playlist" && "\u2212"}
      </div>
    </div>
  );
}

export default Track;
