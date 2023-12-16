import React from 'react';
import Navbar from '../../components/navbar/UserNavbar';
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { centers } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 250,
  },
  {
    field: "location",
    type: "string",
    headerName: "Location",
    width: 150,
  },
  {
    field: "contactInfo",
    type: "string",
    headerName: "Contact Info",
    width: 200,
  },
  {
    field: "centerType",
    type: "string",
    headerName: "Center Type",
    width: 200,
  },
];

const CenterDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="products">
        <div className="info">
          <h1>Centers</h1>
        </div>
        <DataTable slug="centers" columns={columns} rows={centers} showAddLink={false} showDeleteIcon={false} />
      </div>
    </div>
  );
};

export default CenterDetails;
