import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./centers.scss";
// ... (other imports)

const Centers = () => {
  const [adminRows, setAdminRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      type: "string",
      headerName: "Admin name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 150,
    },
    {
      field: "number",
      type: "string",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "address",
      type: "string",
      headerName: "Location",
      width: 150,
    },
    {
      field: "city",
      type: "string",
      headerName: "City",
      width: 150,
    },
  ];

  useEffect(() => {
    axios
      .get('http://localhost:8000/admindata')
      .then(response => {
        console.log('Patient Data:', response.data);
        const adminsArray = response.data.admins || []; // Use 'admins' instead of 'patients'
        setAdminRows(adminsArray);
      })
      .catch(error => {
        console.error('Error fetching admin data:', error);
      });
  }, []);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const displayedAdmins = adminRows.slice(startIdx, endIdx);

  return (
    <div className="users">
      <div className="info">
        <h1>Center</h1>
        <Link to="/admin_register" className="add-patient-link">
          Add Centers
        </Link>
      </div>
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.field}>{column.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedAdmins.map((admin, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={column.field}>{admin[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Centers;
