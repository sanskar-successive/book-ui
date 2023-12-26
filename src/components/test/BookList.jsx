import React, { useContext, useEffect, useState } from "react";
import { Button, List } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookList = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState();

  const handleListItemClick = (id) => {
    navigate(`/book-details/${id}`);
  };

  const handleDeleteBook = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/api/books/${id}`
    );
    console.log(response.data);
  };

  const handleEditBook = (id) => {
    console.log(id);
    navigate(`/add-book/${id}`);
  };

  const fetchApiResponse = async () => {
    const apiResponse = await axios.get(`http://localhost:5000/api/books`);
    console.log(apiResponse);
    setBooks(apiResponse.data);
  };

  useEffect(() => {
    fetchApiResponse();
  }, []);

  return (
    <List
      itemLayout="horizontal"
      size="small"
      dataSource={books}
      renderItem={(item) => (
        <div>
          <List.Item onClick={() => handleListItemClick(item._id)}>
            <img
              style={{ height: "8rem", width: "6rem", margin: "5px" }}
              src={item.coverImage}
            />
            <List.Item.Meta
              style={{ margin: "10px" }}
              title={item?.title}
              description={item?.author.name}
            />
          </List.Item>

          <Button
            onClick={() => handleEditBook(item._id)}
            icon={<EditOutlined />}
          ></Button>
          <Button
            onClick={() => handleDeleteBook(item._id)}
            icon={<DeleteOutlined />}
          ></Button>
        </div>
      )}
    />
  );
};
export default BookList;
