import { DataGrid } from "@mui/x-data-grid";
import { UsersColumns } from "./users.columns";
export default function AllUsersDataGrid({ users }: { users: [] }) {
  return (
    <DataGrid
      rows={users || []}
      columns={UsersColumns}
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
