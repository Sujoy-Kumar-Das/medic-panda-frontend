import { useGetAllCategoriesQuery } from "@/redux/api/category.api";
import { ICategory } from "@/types";
import randomUID from "@/utils/randomId";

export default function useGetAllFilterCategories() {
  const { data, ...apiResponse } = useGetAllCategoriesQuery(undefined);

  const items =
    data?.map((item: ICategory) => ({
      id: item._id,
      title: item.name,
      query: "category",
      value: item._id,
    })) ?? [];

  const allFilterItems = [
    { id: randomUID(), title: "All", value: "", query: "" },
    ...items,
  ];

  return { items: allFilterItems, ...apiResponse };
}
