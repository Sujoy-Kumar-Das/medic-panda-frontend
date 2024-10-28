import { getAllCategoriesService } from "@/services/actions/category.service";
import { getAllProductService } from "@/services/actions/product.service";
import { Box, Container } from "@mui/material";
import ProductDrawer from "./Components/ProductDrawer";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: number | string; searchTerm: string; category: string };
}) {
  const { page, searchTerm, category } = searchParams;

  const { data: products, meta } = await getAllProductService({
    limit: 9,
    page: (page as number) || 1,
    searchTerm,
    category,
  });

  const categories = await getAllCategoriesService();

  return (
    <Box>
      <Container sx={{ py: 4 }}>
        <ProductDrawer
          products={products}
          categories={categories?.data}
          meta={meta}
        />
      </Container>
    </Box>
  );
}
