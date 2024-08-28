import { getAllCategoriesService } from "@/services/actions/category.service";
import Container from "@mui/material/Container";
import CategorySlider from "./CategorySlider";

export default async function CategorySection() {
  const { data } = await getAllCategoriesService(6);
  return (
    <Container sx={{ py: 10 }}>
      <CategorySlider categories={data} />
    </Container>
  );
}
