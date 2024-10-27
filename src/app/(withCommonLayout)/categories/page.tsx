import { getAllCategoriesService } from "@/services/actions/category.service";
import { ICategory } from "@/types";
import { Box, Container, Grid, Typography } from "@mui/material";
import CategoryCard from "./Components/CategoryCard";

export default async function CategoriesPage() {
  const { data } = await getAllCategoriesService();

  const categories = data?.data;

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          mb={6}
          fontWeight="bold"
        >
          Browse by Category
        </Typography>
        <Grid container spacing={4}>
          {categories?.map((category: ICategory) => (
            <Grid key={category._id} item xs={12} sm={6} md={4} lg={3}>
              <CategoryCard category={category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
