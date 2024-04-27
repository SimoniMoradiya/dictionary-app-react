import React from "react";

function Search({ setSearchWord, getMeaning }) {
  return (
    <div className="searchBox">
        <div className="container">
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                setSearchWord(e.target.value);
                }}
            />
            <button
                onClick={() => {
                getMeaning();
                }}
            >
                Search
            </button>
      </div>
    </div>
  );
}

export default Search;
