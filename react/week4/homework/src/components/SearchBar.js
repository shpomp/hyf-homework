import React, { useContext } from "react";
import { SearchContext } from "../App";

const SearchBar = () => {
  const searchContext = useContext(SearchContext);

  return (
    <div>
      <div className="control">
        <input
          className="search-input"
          type="text"
          placeholder="Github username..."
          onChange={(e) => {
            searchContext.setSearchInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
