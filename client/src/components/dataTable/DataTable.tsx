// DataTable.jsx

import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  hideExportOption?: boolean; // Optional prop to hide export option
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    //delete the item
    // mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        pageSize={5} // Adjust the number of rows per page as needed
        disableSelectionOnClick
        hideFooter
        hideToolbar={props.hideExportOption} // Hide the toolbar, including the export option
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        disableColumnMenu
        pageSizeOptions={[5]}
        disableExtendRowFullWidth
      />
    </div>
  );
};

export default DataTable;
