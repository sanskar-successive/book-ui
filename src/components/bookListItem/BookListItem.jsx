import React from "react";
import "./BookListItem.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const BookListItem = ({ item }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/${item._id}`);
  };

  const handleEdit = () => {
    navigate(`/add-book/${item._id}`);
  };

  const handleDelete = () => {};
  // return (
  //   <div className="book-list-item">
  //     <img src={item.coverImage} alt={`${item.title} cover`} className="book-cover" />

  //     <div className="book-details">
  //       <h3>{item.title}</h3>
  //       <p>Author: {item.author.name}</p>
  //       <p>Price: ${item.price}</p>
  //       <p>Rating: {item.rating}/5</p>
  //     </div>
  //     <div className="book-actions">
  //       <button onClick={handleView}>View</button>
  //       <button onClick={handleEdit}>Edit</button>
  //       <button onClick={handleDelete}>Delete</button>
  //     </div>
  //   </div>
  // );

  return (
    <div className="book-list-item">
      <div className="book-details">
        <img src={item.coverImage} alt={`${item.title} cover`} className="book-cover" />

        <div className="book-info">
          <h3>{item.title}</h3>
          <p>Author: {item.author.name}</p>
          <p>Price: ${item.price}</p>
          <p>Rating: {item.rating}/5</p>
        </div>
      </div>

      <div className="book-actions">
        <button className="action-button" onClick={handleView}>
          <FaEye className="action-icon" />
        </button>
        <button className="action-button" onClick={handleEdit}>
          <FaEdit className="action-icon" />
        </button>
        <button className="action-button" onClick={handleDelete}>
          <FaTrash className="action-icon" />
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
