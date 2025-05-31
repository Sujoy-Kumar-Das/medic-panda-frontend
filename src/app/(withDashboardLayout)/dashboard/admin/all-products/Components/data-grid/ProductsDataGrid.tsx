import CustomDataGrid from "@/components/CustomDataGrid/CustomDataGrid";
import { IProduct } from "@/types";
import { productColumns } from "./ProductColumns";

interface ProductsDataGridProps {
  products: IProduct[];
  isLoading: boolean;
  isError: boolean;
}

export default function ProductsDataGrid({
  products,
  isError,
  isLoading,
}: ProductsDataGridProps) {
  return (
    <CustomDataGrid
      rows={products || []}
      columns={productColumns}
      error={isError}
      loading={isLoading}
      noDataMessage="No Product Found"
    />
  );
}
