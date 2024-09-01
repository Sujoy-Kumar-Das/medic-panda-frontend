import { getAllProductService } from "@/services/actions/product.service";
import { Box, Container } from "@mui/material";
import ProductDrawer from "./Components/ProductDrawer";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: number | string; searchTerm: string };
}) {
  const { page, searchTerm } = searchParams;
  const { data: products, meta } = await getAllProductService(
    9,
    (page as number) || 1,
    searchTerm
  );

  return (
    <Box>
      <Container sx={{ py: 4 }}>
        <ProductDrawer products={products} meta={meta} />
      </Container>
    </Box>
  );
}
