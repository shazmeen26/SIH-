
import "./centers.scss";
import DataTable from "../../components/dataTable/DataTable";
import { Link } from "react-router-dom";
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

const Centers = () => {


  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Centers</h1>
        <Link to="/center_register" className="add-center-link">
          Add Centers
        </Link>
      </div>
      <DataTable slug="centers" columns={columns} rows={centers} />

      
    </div>
  );
};

export default Centers;