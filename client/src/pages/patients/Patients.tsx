import React, { useState, useEffect } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";
import "./patients.scss";

const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "Firstname",
    type: "string",
    headerName: "firstname",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "Number",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "Address",
    type: "string",
    headerName: "Location",
    width: 150,
  },
  {
    field: "Substance",
    type: "string",
    headerName: "Substance",
    width: 150,
  },
];

const Patients = () => {
  const [patientRows, setPatientRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    axios
      .get('http://localhost:8000/patientdata')
      .then(response => {
        console.log('Patient Data:', response.data);
        const patientsArray = response.data.patients || [];
        setPatientRows(patientsArray);
      })
      .catch(error => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const displayedPatients = patientRows.slice(startIdx, endIdx);

  return (
    <div className="users">
      <div className="info">
        <h1>Patients</h1>
        <Link to="/patient_register" className="add-patient-link">
          Add Patients
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
          {displayedPatients.map((patient, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={column.field}>{patient[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Patients;
