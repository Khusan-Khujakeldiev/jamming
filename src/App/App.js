import React, { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import "./App.scss";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";

function App() {
  const [tracks, setTracks] = useState([
    {
      id: 1,
      Music_name: "Konsta",
      Music_albom: "Guliston",
      Language: "eng",
    },
    { id: 2, Music_name: "Bashmak", Music_albom: "Noskok", Language: "Rus" },
    {
      id: 3,
      Music_name: "Cesar",
      Music_albom: "Cesar_1",
      Language: "eng",
    },
    {
      id: 4,
      Music_name: "Tapok",
      Music_albom: "Tapok na rayone",
      Language: "eng",
    },
    {
      id: 5,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 6,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 7,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 8,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 9,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 10,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 11,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
  ]);
  const [playListName, setPlayListName] = useState("PlayList");
  console.log(playListName);
  const [playlist, setPlaylist] = useState([]);
  const addToPLayList = (track) => {
    let isInArray = false;
    playlist.forEach((m) => {
      if (track.id === m.id) isInArray = true;
    });
    if (!isInArray) setPlaylist([...playlist, track]);
  };
  const deleteFromPLaylist = (id) => {
    setPlaylist(playlist.filter((e) => e.id !== id));
  };
  return (
    <div>
      <h1 className="unSelectable">
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar></SearchBar>
        <div className="App-playlist">
          <SearchResults
            addToPLayList={addToPLayList}
            track_list={tracks}
          ></SearchResults>
          <PlayList
            name={playListName}
            onNameChange={setPlayListName}
            track_list={playlist}
            deleteFromPLaylist={deleteFromPLaylist}
          ></PlayList>
        </div>
      </div>
    </div>
  );
}

export default App;
