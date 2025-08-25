import { ICategory } from "@/types";
import { Grid } from "@mui/material";
import CategoryCard from "./CategoryCard";

export default function CategoryList({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <Grid container spacing={4}>
      {categories.map((category) => (
        <Grid item xs={12} sm={6} md={4} key={category._id}>
          <CategoryCard category={category} />
        </Grid>
      ))}
    </Grid>
  );
}
