import { getAllCategoriesService } from "@/services/actions/category.service";
import { Box, Container } from "@mui/material";
import CategoryHeader from "./Components/CategoryHeader";
import CategoryList from "./Components/CategoryList";
import FeaturedProducts from "./Components/FeaturedProducts";

export default async function CategoriesPage() {
  const { data } = await getAllCategoriesService();

  const categories = data?.result;

  return (
    <Box>
      <CategoryHeader />
      <Container sx={{ mt: 10 }}>
        <CategoryList categories={categories} />
        <FeaturedProducts />
      </Container>
    </Box>
  );
}
