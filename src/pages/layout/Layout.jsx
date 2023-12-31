import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../../components/content/Content";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import Sort from "../../components/sort/Sort";
import Pagination from "../../components/pagination/Pagination";
import BookDetails from "../bookDetails/BookDetails";

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />

      {/* <Search/> */}
      {/* <Filter/> */}
      {/* <Sort/> */}
      {/* <Pagination/> */}

      {/* <BookDetails/> */}
    </div>
  );
};

export default Layout;
