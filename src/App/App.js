import React, { useState } from "react";
import Spotify from "../Uri/Spotify";
import SearchBar from "../SearchBar/SearchBar";
import "./App.scss";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";

function App() {
  const [tracks, setTracks] = useState([]);
  const [playListName, setPlayListName] = useState("My Playlist");
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

  const search = (term) => {
    Spotify.search(term).then((tracks) => {
      setTracks(tracks);
    });
  };

  return (
    <div>
      <h1 className="unSelectable">
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search}></SearchBar>
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
