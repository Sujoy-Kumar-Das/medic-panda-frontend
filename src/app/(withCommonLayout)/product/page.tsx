import { getAllProductService } from "@/services/actions/product.service";
import { Box, Container } from "@mui/material";
import ProductDrawer from "./Components/ProductDrawer";

export default async function ProductsPage() {
  const { data: products } = await getAllProductService();
  return (
    <Box>
      <Container sx={{ py: 4 }}>
        <ProductDrawer products={products} />
      </Container>
    </Box>
  );
}
