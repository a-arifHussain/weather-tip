import React from "react";

const SearchBar = ({ handleInput, handleSubmit }) => {
  return (
    <form className="searchBox">
      <input type="text" placeholder="Search City" onChange={handleInput} />
      <button onClick={handleSubmit}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchBar;
