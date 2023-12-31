import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import "./BulkUploadList.css"; 

const BulkUploadList = () => {
  const [bulkUploads, setBulkUploads] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true)

  const handleViewBulkUploadErrors = (session_id) => {
    navigate(`/bulk-uploads/${session_id}`);
  };

  const fetchApiResponse = async () => {
    const apiResponse = await axios.get(
      `http://localhost:5000/api/bulk-uploads-list`
    );
    console.log(apiResponse);
    setBulkUploads(apiResponse.data);
    setLoading(false)
  };

  useEffect(() => {
    fetchApiResponse();
  }, []);
  // return (
  //   <div>
  //     <div style={{ border: "solid black", marginLeft: "200px" }}>
  //       <table>
  //         <thead>
  //           <tr>
  //             <td>Bulk Uploads details</td>
  //           </tr>
  //         </thead>

  //         <tbody>
  //           <tr>
  //             <td>
  //               {bulkUploads?.map((item) => {
  //                 return (
  //                   <div>
  //                     Records Processed : {item.recordsProcessed}
  //                     <br />
  //                     Errors : {item.totalErrors}
  //                     <br />
  //                     Time Taken : {item.timeTaken}
  //                     <br />
  //                     <button onClick={() => handleViewBulkUploadErrors(item._id)}>
  //                       View Errors
  //                     </button>
  //                   </div>
  //                 );
  //               })}
  //             </td>
  //           </tr>
  //         </tbody>

  //         <tfoot></tfoot>
  //       </table>
  //     </div>
  //   </div>
  // );

  if(loading){
    return <h3>Loading...</h3>
  }

  return (
    <div className="bulk-upload-container">
      <table>
        <thead>
          <tr>
            <th>Bulk Uploads Details</th>
          </tr>
        </thead>

        <tbody>
          {bulkUploads?.map((item) => (
            <tr key={item._id} className="table-row">
              <td>
                <div className="record-details">
                  <div>
                    Records Processed: {item.recordsProcessed}
                  </div>
                  <div>
                    Errors: {item.totalErrors}
                  </div>
                  <div>
                    Time Taken: {item.timeTaken}
                  </div>
                  <div>
                    Uploaded At: {new Date(item.createdAt).toLocaleString()}
                  </div>
                  <div>
                    Session Id: {item.session_id}
                  </div>
                </div>
                <div className="view-errors">
                  <button
                    onClick={() => handleViewBulkUploadErrors(item.session_id)}
                  >
                    <FaEye className="action-icon" />
                    View Errors
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BulkUploadList;
