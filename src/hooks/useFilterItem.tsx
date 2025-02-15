import { IFilterItem } from "@/types/filter-item";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFilterItem({
  filterItems,
}: {
  filterItems: IFilterItem[];
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  // Handle filter users
  const filterHandler = (filterItem: IFilterItem) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!filterItem.query) {
      // Clear the query from URL
      const params = new URLSearchParams(searchParams.toString());

      // Remove all possible filters
      filterItems.forEach((item) => params.delete(item.query));

      replace(pathName);
      return;
    } else {
      params.set(filterItem.query, String(filterItem.value));
    }

    replace(`${pathName}?${params.toString()}`);
  };

  return { searchParams, replace, pathName, filterHandler };
}
