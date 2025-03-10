import { Container } from "@mui/material";
import CategoryHeader from "./CategoryHeader";
import CategoryDataGrid from "./category-data-grid/CategoryDataGrid";

export default function CategoryCompo({ data }) {
  return (
    <Container>
      <CategoryHeader />
      <CategoryDataGrid categories={data} />
    </Container>
  );
}
