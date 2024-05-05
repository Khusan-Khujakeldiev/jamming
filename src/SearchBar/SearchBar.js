import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="container">
      <form autocomplete="off">
        <div className="finder">
          <div className="finder__outer">
            <div className="finder__inner">
              <div className="finder__icon" ref="icon"></div>
              <input className="finder__input" type="text" name="q" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
