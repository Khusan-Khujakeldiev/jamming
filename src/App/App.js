import React, { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import "./App.scss";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";

function App() {
  const [tracks, setTracks] = useState([
    {
      id: 1,
      artist: "Konsta",
      album: "Guliston",
      name: "Qoshiq",
      uri: "3rVD55RfF4rIzoQhaui1n0",
    },
    {
      id: 2,
      artist: "Bashmak",
      album: "Noskok",
      name: "Harow",
      uri: "4oqDBa1Q7tXtcyyUp7XG5m",
    },
    {
      id: 3,
      artist: "Cesar",
      album: "Cesar_1",
      name: "Narative",
      uri: "2a3bDOLdJRfHgrJLyPUqed",
    },
    {
      id: 4,
      artist: "Tapok",
      album: "Tapok na rayone",
      name: "Bomi",
      uri: "7FC3dajLv0xc3TcdB325fJ",
    },
    {
      id: 5,
      artist: "UzBoom",
      album: "Bu Voqiya",
      name: "Are u real?",
      uri: "1lkMKXP8Y8BI4plES5ezD0",
    },
    {
      id: 6,
      artist: "UzBoom",
      album: "Bu Voqiya",
      name: "Welcom to Party",
      uri: "3LDOh5ufbKc9RMu1eOzL5V",
    },
    {
      id: 7,
      artist: "UzBoom",
      album: "Bu Voqiya",
      name: "Why me?",
      uri: "5uDASfU19gDxSjW8cnCaBp",
    },
    {
      id: 8,
      artist: "UzBoom",
      album: "Bu Voqiya",
      name: "So easy",
      uri: "4ylqqjURYE9TN5jdJXPTGA",
    },
    {
      id: 9,
      artist: "UzBoom",
      album: "Bu Voqiya",
      name: "Do it",
      uri: "5E69AASuENCXbP1PHO74F5",
    },
    {
      id: 10,
      artist: "UzBoom",
      album: "Bu Voqiya",
      name: "Ama Gangsta",
      uri: "02RYVRiIeyI0UmQdmjqd3A",
    },
    {
      id: 11,
      artist: "UzBoom",
      album: "Bu Voqiya",
      name: "Whole day",
      uri: "4nMLlfAqCzzSoyEskPfDen",
    },
  ]);
  const [playListName, setPlayListName] = useState("PlayList");
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

  const getPlayListUris = (playlist) => {
    return playlist.map((track) => track.uri);
  };
  const clearPlayList = () => {
    setPlaylist([]);
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
            getPlayListUris={getPlayListUris}
            clearPlayList={clearPlayList}
          ></PlayList>
        </div>
      </div>
    </div>
  );
}

export default App;
