import { ICategory } from "@/types";
import { Container } from "@mui/material";
import CategoryHeader from "./CategoryHeader";
import CategoryDataGrid from "./category-data-grid/CategoryDataGrid";

export default function CategoryCompo({ data }: { data: ICategory[] }) {
  return (
    <Container sx={{ pb: 4 }}>
      <CategoryHeader />
      <CategoryDataGrid categories={data} />
    </Container>
  );
}
