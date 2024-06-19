import React, { useRef, useState } from "react";
import "./SearchBar.scss";

function SearchBar({ onSearch }) {
  const iconRef = useRef(null);
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleFocus = () => {
    setIsActive(true);
  };
  const handleBlur = (e) => {
    if (e.target.value.length === 0) setIsActive(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setIsActive(false);
    inputRef.current.disabled = true;
    onSearch(input);
    setInput("");
    setTimeout(() => {
      setIsProcessing(false);
      inputRef.current.disabled = false;
      if (input.length > 0) {
        setIsActive(true);
      }
    }, 1000);
  };

  return (
    <div className="container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div
          className={`finder ${isActive ? "active" : ""} ${
            isProcessing ? "processing" : ""
          }`}
        >
          <div className="finder__outer">
            <div className="finder__inner">
              <div className="finder__icon" ref={iconRef}></div>
              <input
                ref={inputRef}
                className="finder__input"
                type="text"
                name="q"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                value={input}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
