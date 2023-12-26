import axios from "axios";
import React, { useEffect, useState } from "react";
import TableItem from "./TableItem";
import Layout from "./Layout";

const Test = () => {
  const [books, setBooks] = useState([]);

  const fetchApiResponse = async () => {
    const apiResponse = await axios.get(`http://localhost:5000/api/books`);
    console.log(apiResponse);
    setBooks(apiResponse.data);
  };

  useEffect(() => {
    fetchApiResponse();
  }, []);
  return (
    <div>
      <Layout />

      <div style={{ border: "solid black", marginLeft:"200px" }}>
        <table>
          <thead>
            <tr>
              <td>Book details</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                {books?.map((item) => (
                  <TableItem item={item} />
                ))}
              </td>
            </tr>
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default Test;
