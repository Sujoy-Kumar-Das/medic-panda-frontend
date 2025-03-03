import { DataGrid } from "@mui/x-data-grid";
import { AdminOrderDataColumn } from "./AdminOrderDataColumn";

export default function AdminOrderDataGrid({ orders }) {
  return (
    <DataGrid
      rows={orders || []}
      columns={AdminOrderDataColumn}
      getRowId={(row: any) => row._id}
      disableColumnSorting
      disableColumnMenu
      disableColumnResize
      hideFooter
      hideFooterPagination
      hideFooterSelectedRowCount
    />
  );
}
