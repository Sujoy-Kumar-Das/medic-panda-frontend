import { ICategory } from "@/types";
import { Container } from "@mui/material";
import CategoryHeader from "./CategoryHeader";
import CategoryDataGrid from "./category-data-grid/CategoryDataGrid";

export default function CategoryCompo({
  data,
  isLoading,
  isError,
}: {
  data: ICategory[];
  isLoading: boolean;
  isError: boolean;
}) {
  return (
    <Container sx={{ pb: 4 }}>
      <CategoryHeader />

      <CategoryDataGrid
        categories={data}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  );
}
