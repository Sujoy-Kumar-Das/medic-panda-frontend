import { IFilterItem } from "@/types/filter-item";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFilter({
  filterItems = [],
}: {
  filterItems: IFilterItem[] | null;
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  // Handle filter users
  const applyFilter = (filterItem: IFilterItem | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!filterItem || filterItem.value === "") {
      // Remove all possible filters
      filterItems?.forEach((item) => params.delete(item.query));

      replace(pathName);
      return;
    } else {
      params.set(filterItem.query, String(filterItem.value));
    }

    replace(`${pathName}?${params.toString()}`);
  };

  return { applyFilter, searchParams };
}
