import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="p-2">
      <input
        className="border-solid border border-green-700 bg-blue-200 p-2"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
