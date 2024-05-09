import React from "react";
import "./Track.scss";

function Track(props) {
  return (
    <div className="track">
      <div>
        <h3>
          {props.track_list.Music_name} {props.track_list.Music_albom}
        </h3>
        <p>{props.track_list.Language}</p>
      </div>
      <div className="Track_add_butt">+</div>
    </div>
  );
}

export default Track;
