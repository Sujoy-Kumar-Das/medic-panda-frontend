import PandaSelect from "@/components/form/PandaSelect";
import { useGetAllCategoriesQuery } from "@/redux/api/category.api";
import { ICategory } from "@/types";

export default function AddProductSelectCategory() {
  const { data } = useGetAllCategoriesQuery(undefined);

  const items = data.map((item: ICategory) => ({
    id: item._id,
    title: item.name,
    value: item._id,
  }));

  return <PandaSelect name="category" items={items} label="Category" />;
}
