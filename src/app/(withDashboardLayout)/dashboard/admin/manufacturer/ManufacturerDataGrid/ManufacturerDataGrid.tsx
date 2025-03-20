import { DataGrid } from "@mui/x-data-grid";
import { ManufacturerColumns } from "./ManufacturerColumns";

export default function ManufacturerDataGrid({ manufacturers }) {
  return (
    <DataGrid
      rows={manufacturers || []}
      columns={ManufacturerColumns}
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
