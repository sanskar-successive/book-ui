import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookListItem from "../../components/bookListItem/BookListItem";
import Pagination from "../../components/pagination/Pagination";
import Sort from "../../components/sort/Sort";
import { FaFilter } from "react-icons/fa";
import Filter from "../../components/filter/Filter";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [filterOpen, setFilterOpen] = useState(false)

  const location = useLocation();

  const fetchApiResponse = async () => {
    try {
      const apiResponse = await axios.get(
        `http://localhost:5000/api/search${location.search}`
      );
      setBooks(apiResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFilter = ()=>{
    setFilterOpen(!filterOpen)
  }

  useEffect(() => {
    fetchApiResponse();
  }, [location.search]);

  return (
    <div>
      <div style={{ marginLeft: "200px" }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
          
                <Sort />
                <button className="filter-button" onClick={toggleFilter}>
                  <FaFilter /> Filters
                </button>

                {filterOpen && <Filter/>}
              
            </thead>

            <tbody>
              <tr>
                <td>
                  {books.length === 0
                    ? "kuch nhi hai"
                    : books &&
                      books?.map((item) => <BookListItem item={item} />)}
                </td>
              </tr>
            </tbody>

            <tfoot>
              <Pagination />
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
};

export default BookList;
