import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "Description", flex: 1 },
  { field: "firstName", headerName: "Due Amount ", flex: 1 },
  { field: "due", headerName: "Due Date", flex: 1 },
  { field: "amount", headerName: "Actual Amount ", flex: 1 },
  { field: "paymentDate", headerName: "Payment Date  ", flex: 1 },
  { field: "total", headerName: "Total  ", flex: 1 },
];

export default function InstallmentsTable() {
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <DataGrid
        // rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnSorting
        disableColumnResize
        disableColumnMenu
        checkboxSelection
        hideFooter
      />
    </div>
  );
}
