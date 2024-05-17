import React, { useState } from "react";
import "./PlayListName.scss";
import Track from "../Track/Track";
function PlayListName(props) {
  const [name, setName] = useState(props.name || "");
  const [isEditing, setIsEditing] = useState(false);
  if (!props.track_list || !Array.isArray(props.track_list)) {
    return null;
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const handleSave = () => {
    typeof name !== "string" || name.length === 0
      ? setIsEditing(true)
      : setIsEditing(false);
    props.onNameChange(name);
  };
  return (
    <div>
      {props.context === "playlist" && isEditing ? (
        <input
          className="playlist_input"
          onChange={onChangeName}
          type="text"
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          value={name}
          autoFocus
        />
      ) : (
        props.context === "playlist" && (
          <h2 className="playlist_h2" onDoubleClick={() => setIsEditing(true)}>
            {name}
          </h2>
        )
      )}

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
{
  /* <button onClick={handleSave}>0</button> */
}
export default PlayListName;
