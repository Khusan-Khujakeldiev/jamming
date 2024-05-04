import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1 className="unselectable">
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
