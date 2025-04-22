import PandaSelect from "@/components/form/PandaSelect";
import { useGetAllCategoriesQuery } from "@/redux/api/category/category.api";
import { ICategory } from "@/types";

export default function EditProductSelectCategory() {
  const { data } = useGetAllCategoriesQuery(undefined);

  const items = data.map((item: ICategory) => ({
    id: item._id,
    title: item.name,
    value: item._id,
  }));

  return <PandaSelect name="product.category" items={items} label="Category" />;
}
