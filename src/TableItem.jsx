import React from "react";
import "./TableItem.css";

const TableItem = ({ item }) => {
  return (
    <div className="book-list-item">
      <img src={item.coverImage} alt={`${item.title} cover`} className="book-cover" />

      <div className="book-details">
        <h3>{item.title}</h3>
        <p>Author: {item.author.name}</p>
        <p>Price: ${item.price}</p>
        <p>Rating: {item.rating}/5</p>
      </div>
      <div className="book-actions">
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TableItem;
