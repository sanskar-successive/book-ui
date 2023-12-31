import React from "react";
import "./Content.css";
import BookList from "../../pages/bookList/BookList";

const Content = ({ children }) => {
  return (
    <div className="content-section">
      <BookList />
    </div>
  );
};

export default Content;
