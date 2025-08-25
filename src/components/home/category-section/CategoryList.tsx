import { getAllCategoriesService } from "@/services/actions/category.service";
import { ICategory } from "@/types";
import { Grid } from "@mui/material";
import CategoryCard from "./CategoryCard";

export default async function CategoryList() {
  const { data } = await getAllCategoriesService(6, true);

  return (
    <Grid container spacing={3}>
      {data?.result?.map((category: ICategory) => (
        <Grid item xs={6} md={4} lg={2} key={category._id}>
          <CategoryCard category={category} />
        </Grid>
      ))}
    </Grid>
  );
}
