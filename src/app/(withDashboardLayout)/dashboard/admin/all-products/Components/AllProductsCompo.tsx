import PaginationCompo from "@/components/shared/PaginationCompo/PaginationCompo";
import { IMeta, IProduct } from "@/types";
import { Container, Stack } from "@mui/material";
import ProductsHeader from "./all-product-header/ProductsHeader";
import ProductsDataGrid from "./product-data-grid/ProductsDataGrid";

interface IProductsWithMetaData {
  result: IProduct[];
  meta: IMeta;
}

interface AllProductsCompoProps {
  data: IProductsWithMetaData;
  isLoading: boolean;
  isError: boolean;
}

export default function AllProductsCompo({
  data,
  isLoading,
  isError,
}: AllProductsCompoProps) {
  return (
    <Container sx={{ pb: 2 }}>
      {/* Header Section */}
      <ProductsHeader />

      {/* Product Grid Section */}
      <ProductsDataGrid
        products={data?.result}
        isLoading={isLoading}
        isError={isError}
      />

      {/* Pagination Section */}
      <Stack direction="row" justifyContent="flex-end" mt={6}>
        <PaginationCompo totalPageCount={data?.meta?.totalPage} />
      </Stack>
    </Container>
  );
}
