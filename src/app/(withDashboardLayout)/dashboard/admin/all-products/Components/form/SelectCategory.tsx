import PandaSelect from "@/components/form/PandaSelect";
import { useGetAllCategoriesQuery } from "@/redux/api/category/category.api";
import { ICategory } from "@/types";

export default function SelectProductCategory() {
  const { data, isLoading } = useGetAllCategoriesQuery(undefined);

  const items = isLoading
    ? [{ id: "loading", title: "Loading categories...", value: "" }]
    : data?.result?.map((item: ICategory) => ({
        id: item._id,
        title: item.name,
        value: item._id,
      })) || [];

  return (
    <PandaSelect
      name="product.category"
      items={items}
      label="Category"
      disabled={isLoading}
    />
  );
}
