import { getAllCategoriesService } from "@/services/actions/category.service";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import CategorySlider from "./CategorySlider";

export default async function CategorySection() {
  const { data } = await getAllCategoriesService(6, true);
  return (
    <Container sx={{ py: 10 }}>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "text.secondary",
          textAlign: "left",
          flex: 1,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          mb: { xs: 2, sm: 0 },
        }}
      >
        Top Categories
      </Typography>
      <CategorySlider categories={data?.result} />
    </Container>
  );
}
