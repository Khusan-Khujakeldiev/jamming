import React from "react";
import Track from "../Track/Track";

function TrackList(props) {
  if (!props.track_list || !Array.isArray(props.track_list)) {
    return null;
  }
  return (
    <div>
      {props.track_list.map((track) => (
        <Track
          addToPLayList={props.addToPLayList}
          deleteFromPLaylist={props.deleteFromPLaylist}
          track_list={track}
          key={track.id}
          context={props.context}
        ></Track>
      ))}
    </div>
  );
}

export default TrackList;
