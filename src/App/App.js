import React, { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import "./App.scss";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";

function App() {
  const [tracks, setTaracks] = useState([
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
      id: 5,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 5,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 5,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 5,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 5,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
    {
      id: 5,
      Music_name: "UzBoom",
      Music_albom: "Bu Voqiya",
      Language: "uz",
    },
  ]);
  return (
    <div>
      <h1 className="unSelectable">
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar></SearchBar>
        <div className="App-playlist">
          <SearchResults track_list={tracks}></SearchResults>
          <PlayList></PlayList>
        </div>
      </div>
    </div>
  );
}

export default App;
