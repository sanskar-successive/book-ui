import React, { useState } from "react";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = ()=>{

    // const newQuery = `${query}?search=${searchQuery}`
    // updateQuery(newQuery);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        name="searchQuery"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;
