import React from "react";
import "./Header.css";
import FilterButton from "./FilterButton";
import SortButton from "./SortButton";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header className="sticky-header">
      <div className="header-content">
        <Searchbar/>
        <FilterButton />
        <SortButton />
      </div>
    </header>
  );
};

export default Header;
