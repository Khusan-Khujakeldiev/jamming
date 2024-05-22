import React from "react";

import PlayListName from "../PlayListName/PlayListName";

function TrackList(props) {
  return (
    <div>
      <PlayListName
        context={props.context}
        addToPLayList={props.addToPLayList}
        deleteFromPLaylist={props.deleteFromPLaylist}
        track_list={props.track_list}
        name={props.name}
        onNameChange={props.onNameChange}
        getPlayListUris={props.getPlayListUris}
        clearPlayList={props.clearPlayList}
      ></PlayListName>
    </div>
  );
}

export default TrackList;
