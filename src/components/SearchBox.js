import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        type="search" 
        placeholder="search robots" 
        className="pa2 ba b--red br2 bg-lightest-gray"
        onChange={searchChange}
        />
    </div>
  );
} 

export default SearchBox;