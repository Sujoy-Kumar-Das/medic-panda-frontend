import { ICategory, IMeta } from "@/types";
import { Container } from "@mui/material";
import CategoryHeader from "./CategoryHeader";
import CategoryDataGrid from "./category-data-grid/CategoryDataGrid";

interface CategoryCompoProps {
  data: { result: ICategory[]; meta: IMeta };
  isLoading: boolean;
  isError: boolean;
}

export default function CategoryCompo({
  data,
  isLoading,
  isError,
}: CategoryCompoProps) {
  return (
    <Container sx={{ pb: 4 }}>
      <CategoryHeader />

      <CategoryDataGrid
        categories={data?.result}
        isLoading={isLoading}
        isError={isError}
      />
    </Container>
  );
}
