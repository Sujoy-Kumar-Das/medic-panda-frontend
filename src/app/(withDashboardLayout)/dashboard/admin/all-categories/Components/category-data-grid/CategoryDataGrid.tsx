import CustomDataGrid from "@/components/CustomDataGrid/CustomDataGrid";
import { ICategory } from "@/types";
import { CategoryColumns } from "./categoryColumns";

export default function CategoryDataGrid({
  categories,
  isLoading,
  isError,
}: {
  categories: ICategory[];
  isLoading: boolean;
  isError: boolean;
}) {
  return (
    <CustomDataGrid
      rows={categories}
      columns={CategoryColumns}
      loading={isLoading}
      error={isError}
    />
  );
}
