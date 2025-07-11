import { useGetAllCategoriesQuery } from "@/redux/api/category/category.api";
import { ICategory } from "@/types";
import randomUID from "@/utils/randomId";

export default function useGetAllFilterCategories() {
  const { data, ...apiResponse } = useGetAllCategoriesQuery({ limit: 10 });

  const items =
    data?.result?.map((item: ICategory) => ({
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
