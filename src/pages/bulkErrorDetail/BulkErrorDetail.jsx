import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./BulkErrorDetail.css"; // Import your CSS file

const BulkErrorDetail = () => {
  const { session_id } = useParams();

  const [bulkErrors, setBulkErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleApiResponse = async () => {
    try {
      const apiResponse = await axios.get(
        `http://localhost:5000/api/bulk-uploads-errors/${session_id}`
      );
      setBulkErrors(apiResponse.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleApiResponse();
  }, [session_id]);

  return (
    <div className="bulk-error-container">
      <div className="table-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Row Number</th>
                <th>Error Details</th>
              </tr>
            </thead>

            <tbody>
              {bulkErrors?.map((item, index) => (
                <tr key={index}>
                  <td>{item.rowNumber}</td>
                  <td>{item.errorDetails}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BulkErrorDetail;
