import PaginationCompo from "@/components/shared/PaginationCompo/PaginationCompo";
import { Container, Stack } from "@mui/material";
import ProductsHeader from "./all-product-header/ProductsHeader";
import ProductsDataGrid from "./product-data-grid/ProductsDataGrid";

export default function AllProductsCompo({ data }) {
  return (
    <Container sx={{ pb: 2 }}>
      {/* Header Section */}
      <ProductsHeader />

      {/* Product Grid Section */}
      <ProductsDataGrid products={data?.result} />

      {/* Pagination Section */}
      <Stack direction="row" justifyContent="flex-end" mt={6}>
        <PaginationCompo totalPageCount={data?.meta?.totalPage} />
      </Stack>
    </Container>
  );
}
