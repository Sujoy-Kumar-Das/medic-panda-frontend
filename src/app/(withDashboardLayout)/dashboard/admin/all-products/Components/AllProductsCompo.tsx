import PaginationCompo from "@/components/shared/PaginationCompo/PaginationCompo";
import { IMeta, IProduct } from "@/types";
import { Box, Container, Stack } from "@mui/material";
import ProductsHeader from "./all-product-header/ProductsHeader";
import ProductsDataGrid from "./data-grid/ProductsDataGrid";

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
  console.log({ data });

  return (
    <Container sx={{ pb: 5 }}>
      {/* Header Section */}
      <ProductsHeader />

      {/* Product Grid Section */}
      <Box sx={{ mt: 3, overflow: "auto" }}>
        <ProductsDataGrid
          products={data?.result}
          isLoading={isLoading}
          isError={isError}
        />
      </Box>

      {/* Pagination Section */}
      <Stack direction="row" justifyContent="flex-end" mt={6}>
        <PaginationCompo totalPageCount={data?.meta?.totalPage} />
      </Stack>
    </Container>
  );
}
