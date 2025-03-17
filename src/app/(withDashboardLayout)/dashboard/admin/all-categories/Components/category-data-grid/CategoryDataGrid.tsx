import { ICategory } from "@/types";
import { DataGrid } from "@mui/x-data-grid";
import { CategoryColumns } from "./categoryColumns";

export default function CategoryDataGrid({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <DataGrid
      rows={categories}
      columns={CategoryColumns}
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
