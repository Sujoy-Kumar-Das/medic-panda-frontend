import { IProduct } from "@/types";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "./ProductColumns";

export default function ProductsDataGrid({
  products,
}: {
  products: IProduct[];
}) {
  return (
    <DataGrid
      rows={products || []}
      columns={productColumns}
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
